/* GET blogAdd page */
module.exports.blogAdd = function(req, res) {
	res.render('blogAdd', {title: 'Blog Add' });
};

/* GET blogList page */
module.exports.blogList = function(req, res) {
	res.render('blogList', {title: 'Blog List' });
};
