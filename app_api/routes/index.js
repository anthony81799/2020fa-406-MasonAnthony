var express = require('express');
var router = express.Router();
var ctrlBlogs = require('../controllers/blogs');

/* Request for blogs */
router.get('/api/blogs', ctrlBlogs.blogGetAll);
router.get('/api/blogs/:blogid', ctrlBlogs.blogGetOne);
router.post('/api/blogs', ctrlBlogs.blogCreate);
router.put('/api/blogs/:blogid', ctrlBlogs.blogUpdateOne);
router.delete('/api/blogs/:blogid', ctrlBlogs.blogDeleteOne);

module.exports = router;
