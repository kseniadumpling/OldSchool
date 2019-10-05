const path = require('path');

const express = require('express');

const controller = require('../controllers/site');

const router = express.Router();

router.get('/', controller.getIndex);
router.get('/courses', controller.getCourses);
router.get('/articles', controller.getArticles);
router.post('/articles', controller.postArticles);
router.get('/reviews', controller.getReviews);
router.get('/contacts', controller.getContacts);
router.post('/contacts', controller.postContacts);
router.get('/FAQ', controller.getFAQ);
router.post('/emailing', controller.postEmails);


module.exports = router;