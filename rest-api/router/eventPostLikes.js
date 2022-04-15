const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { eventPostController } = require('../controllers');

// middleware that is specific to this router

router.put('/:eventPostId', auth(), eventPostController.like);

module.exports = router
