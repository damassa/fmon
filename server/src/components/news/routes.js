const { Router } = require('express');

require('dotenv').config();

const router = Router();

const { 
    userById,
    requireSignin, 
    isAuth
} = require('./../user/Controller');

const { 
    createNews, 
    readOneNews,
    newsById,
    listNews
} = require('./Controller');

router.post("/news/create/:userId", requireSignin, isAuth, createNews);
router.get("/news/:newsId", readOneNews);
router.get("/news/", listNews);

router.param('userId', userById);
router.param('newsId', newsById);

module.exports = router;