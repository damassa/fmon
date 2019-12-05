const { Router } = require('express');

const router = Router();

const { 
    imageById,
    showImage
} = require('./Controller');

router.get("/image/:imgId", showImage);

router.param('imgId', imageById);

module.exports = router;