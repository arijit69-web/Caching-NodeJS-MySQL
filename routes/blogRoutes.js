const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/posts/:id', blogController.getPostById);

module.exports = router;
