const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { schoolController } = require('../controllers');

// middleware that is specific to this router

router.get('/', schoolController.getSchools);
router.post('/', auth(), schoolController.createSchool);

// router.get('/:eventId', eventController.getEvent);
// router.post('/:eventId', auth(), eventPostController.createEventPost);
// router.put('/:eventId/subscribe', auth(), eventController.subscribe);
// router.put('/:eventId/unsubscribe', auth(), eventController.unsubscribe);
// router.put('/:eventId/posts/:eventPostId', auth(), eventPostController.editEventPost);
// router.delete('/:eventId/posts/:eventPostId', auth(), eventPostController.deleteEventPost);


module.exports = router