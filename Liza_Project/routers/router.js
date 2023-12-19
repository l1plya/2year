const Router = require('express');
const router = new Router();
const controller = require('../controllers/Controller');

router.get('/', controller.indexPage);
router.get('/feedback', controller.FeedbackPage);
router.get('/contact', controller.ContactPage);

module.exports = router;