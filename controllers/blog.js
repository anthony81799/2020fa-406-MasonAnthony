/* GET blogAdd page */
module.exports.blogAdd = function(req, res) {
	res.render('blogAdd', {title: 'Blog Add' });
};

/* GET blogList page */
module.exports.blogList = function(req, res) {
	res.render('blogList', {title: 'Blog List' },
	blogs: [{
		blog-title: 'Blog1',
		blog-text: 'This is a placeholder blog.'
	},
		{
		blog-title: 'Test',
		blog-text: 'Blog test.'
	}
		{
		blog-title: 'BlogTest',
		blog-text: 'Final test blog.'
	}]
	);
};

/* GET blogEdit page */
module.exports.blogEdit = function(req, res) {
	res.render('blogList', {title: 'Blog Edit' });
};

/* GET blogDelete page */
module.exports.blogDelete = function(req, res) {
	res.render('blogDelete', {title: 'Blog Delete' });
};
