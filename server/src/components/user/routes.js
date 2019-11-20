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
    auth,
    read,
    update
} = require('./Controller');

//Auth Routes
router.post('/user/signup', signup);
router.post('/user/signin', signin);
router.get('/user/signout', signout);

//User Routes
router.get('/user/:userId', requireSignin, read);
router.put('/user/:userId', requireSignin, isAuth, update);

//Test Auth and Admin Route
router.get('/admin/:userId', requireSignin, isAuth, isAdmin, secret);
router.get('/auth/:userId', requireSignin, isAuth, auth);

router.param('userId', userById);

module.exports = router;