const { Router } = require('express');

const router = Router();

const { 
    signup, 
    signin, 
    signout, 
    userById,
    requireSignin, 
    isAdmin, 
    isAuth,
    secret,
    auth
} = require('./Controller');

router.post('/user/signup', signup);
router.post('/user/signin', signin);
router.get('/user/signout', signout);

router.get('/admin/:userId', requireSignin, isAuth, isAdmin, secret); //Test Admin Resource
router.get('/auth/:userId', requireSignin, isAuth, auth); //Test Auth Resource


router.param('userId', userById);

module.exports = router;