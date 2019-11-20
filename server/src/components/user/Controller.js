const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const db = require('../../database');

require('dotenv').config();

exports.signup = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const repeatPassword = req.body.repeatPassword;

    if(repeatPassword === password) {
        bcrypt.hash(password, 10, function(e, hash) {
            let sql = `insert into users (name, email, password) values (?, ?, ?)`;
            db.connect.query(sql, [name, email, hash], (err, values) => {
                if(err) {
                    res.status(400).json({
                        error: err
                    });
                } else {
                    res.status(200).json(values)
                }
            });
        });
    } else {
        res.status(400).json({
            error: "Different passwords"
        });
    }
}

exports.signin = (req, res) => {
    const { name, password } = req.body;

    let sql = `select distinct * from users where name = ?`;
    db.connect.query(sql, [name], (err, values) => {
        values = values[0];
        if(err) {
            res.status(400).json({
                error: err
            });
        }
        bcrypt.compare(password, values.password).then((hash) => {
            if(hash) {
                const token = jwt.sign({ id: values.id }, process.env.SECRET);
                res.cookie('t', token, {expire: new Date() + 9999});
                const { id, name, role } = values;

                res.status(200).json({ token, user: {id, name, role} });
            } else {
                res.status(400).json({
                    error: 'Name and password does\'t match'
                });
            }
        });
    })
}

exports.signout = (req, res) => {
    res.clearCookie('t');
    res.json({ message: 'Signout success' });
}

exports.userById = (req, res, next, id) => {
    let sql = `select distinct * from users where id = ?`;
    db.connect.query(sql, [id], (err, values) => {
        if(err || !values) {
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.user = values[0];
        next();
    });
}

exports.requireSignin = expressJwt({
    secret: process.env.SECRET,
    userProperty: "auth"
})

exports.isAdmin = (req, res, next) => {
    if(req.user.role !== 1) {
        return res.status(403).json({
            error: "Admin resource! Access Denied"
        });
    }
    next();
}

exports.isAuth = (req, res, next) => {
    let user = req.user.id === req.auth.id; 
    
    if(!user) {
        return res.status(400).json({
            error: "Access Denied"
        });
    }
    next();
}


exports.secret = (req, res) => {
    res.json({ 
        message: "Is Admin" 
    });
}

exports.auth = (req, res) => {
    res.json({ 
        message: "Is Auth" 
    });
}