const { Router } = require('express');

const router = Router();

const { 
    userById,
    requireSignin, 
    isAuth
} = require('./../user/Controller');

const { 
    storieById,
    createStorie,
    listStories,
} = require('./Controller');

router.post("/stories/create/:userId", requireSignin, isAuth, createStorie);
router.post("/stories/", requireSignin, isAuth, listStories);

router.param('userId', userById);
router.param('storieId', storieById);

module.exports = router;