const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const { 
    userById,
    requireSignin, 
    isAuth
} = require('./../user/Controller');

const { createNews } = require('./Controller');

router.post("/news/create/:userId", requireSignin, isAuth, createNews);

router.param('userId', userById);

module.exports = router;