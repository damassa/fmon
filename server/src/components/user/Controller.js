const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { validationResult } = require('express-validator');

const db = require('../../database');

const salt = 10;

require('dotenv').config();

exports.signup = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const repeatPassword = req.body.repeatPassword;

    if(repeatPassword === password) {
        bcrypt.hash(password, salt, function(e, hash) {
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const { name, password } = req.body;

    let sql = `select distinct * from users where name = ?`;
    db.connect.query(sql, [name], (err, values) => {
        if(err || !values[0]) {        
            return res.status(400).json({
                error: err
            });
        }
        values = values[0];

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
        req.user.password = null;
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
    if(!req.user || !req.auth) {
        return res.status(400).json({
            error: "Access Denied"
        });
    } else {
        let user = req.user.id === req.auth.id; 
    
        if(!user) {
            return res.status(400).json({
                error: "Access Denied"
            });
        }
    }
    next();
}


exports.secret = (req, res) => {
    res.json({ 
        message: "Is Admin" 
    });
}

exports.auth = (req, res) => {
    res.json(req.user);
}

exports.read = (req, res) => {
    req.user.password = undefined;

    return res.json(req.user);
}

exports.update = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, salt);

    let sql = `update users set email = ?,password = ? where id = ?`;
    db.connect.query(sql, [email, password, req.user.id], (err, values) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        } else {
            return res.status(200).json(values);
        }
    });
}