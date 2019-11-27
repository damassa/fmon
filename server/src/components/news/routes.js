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
    listNews,
    listLowInfosNews,
    getImage
} = require('./Controller');

router.post("/news/create/:userId", requireSignin, isAuth, createNews);
router.get("/news/:newsId", readOneNews);
router.post("/news/", listNews);
router.post("/news/lowInfos", listLowInfosNews);
router.get("/news/image/:newsId", getImage);

router.param('userId', userById);
router.param('newsId', newsById);

module.exports = router;