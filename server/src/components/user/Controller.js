const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const {errorHandler} = require('../../helpers/dbErrorHandler');


exports.createUser = (req, res) => {
    const name = req.name;
    const email = req.email;
    const password = req.password;

    if(name && email && password) {
        
    }
}