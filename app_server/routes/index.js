var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlBlogPages = require('../controllers/blog');

/* Setup routes to pages */
router.get('/', ctrlHome.home);
router.get('/blogList', ctrlBlogPages.blogList);
router.get('/blogAdd', ctrlBlogPages.blogAdd);
router.get('/blogEdit', ctrlBlogPages.blogEdit);
router.get('/blogDelete', ctrlBlogPages.blogDelete);

module.exports = router;
