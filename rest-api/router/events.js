const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { eventController, eventPostController } = require('../controllers');

// middleware that is specific to this router

router.get('/', eventController.getEvents);
router.post('/', auth(), eventController.createEvent);

router.get('/:eventId', eventController.getEvent);
router.post('/:eventId', auth(), eventPostController.createEventPost);
router.put('/:eventId/subscribe', auth(), eventController.subscribe);
router.put('/:eventId/unsubscribe', auth(), eventController.unsubscribe);
router.put('/:eventId/posts/:eventPostId', auth(), eventPostController.editEventPost);
router.delete('/:eventId/posts/:eventPostId', auth(), eventPostController.deleteEventPost);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router