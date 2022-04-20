const router = require('express').Router();
const users = require('./users');
const events = require('./events');
const schools = require('./schools');
const eventPosts = require('./eventPosts');
const eventPostLikes = require('./eventPostLikes');
const eventPostDislikes = require('./eventPostDislikes');
const test = require('./test');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/events', events);
router.use('/schools', schools);
router.use('/eventPosts', eventPosts);
router.use('/eventPostLikes', eventPostLikes);
router.use('/eventPostDislikes', eventPostDislikes);
router.use('/test', test);

module.exports = router;
