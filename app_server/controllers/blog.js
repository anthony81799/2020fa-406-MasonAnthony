/* GET blogAdd page */
module.exports.blogAdd = function(req, res) {
	res.render('blogAdd', {title: 'Blog Add' });
};

/* GET blogList page */
module.exports.blogList = function(req, res) {
	res.render('blogList', {title: 'Blog List', blogs:
		[{
		blogTitle: 'Blog1',
		blogText: 'This is a placeholder blog'
		},

		{
		blogTitle: 'Test',
		blogText: 'Blog test.'
		},

		{
		blogTitle: 'BlogTest',
		blogText: 'Final test blog.'
		}]
	});
};

/* GET blogEdit page */
module.exports.blogEdit = function(req, res) {
	res.render('blogEdit', {title: 'Blog Edit' });
};

/* GET blogDelete page */
module.exports.blogDelete = function(req, res) {
	res.render('blogDelete', {title: 'Blog Delete' });
};
