const { Router } = require('express');

const router = Router();

const { createUser } = require('./Controller');

router.post('/user/signup', createUser);

module.exports = router;