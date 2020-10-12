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
router.post('/blogAdd', ctrlBlogPages.addPost);
router.put('/blogEdit', ctrlBlogPages.editPost);
router.delete('/blogDelete', ctrlBlogPages.deletePost);

module.exports = router;
