const express = require('express');
const router = express.Router()
const twattController = require('../controllers/tweet');


router.get('/news', twattController.twitterSearch)

module.exports = router;
