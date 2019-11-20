const bcrypt = require('bcrypt');
const db = require('../../database');

exports.createUser = (req, res) => {
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