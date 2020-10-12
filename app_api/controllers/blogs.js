var mongoose = require('mongoose');
var Blog = mongoose.model('blogger');

var sendJSONresponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

/* GET single blog */
module.exports.blogGetOne = function (req, res) {
	if (req.params && req.params.blogid) {
		Blog
			.findById(req.params.blogid)
			.exec(function(err, blog) {
				if (!blog) {
					sendJSONresponse(res, 404, {"message": "blogid not found"});
					return;
				} else if (err) {
					console.log(err);
					sendJSONresponse(res, 404, err);
					return;
				}
				console.log(blog);
				sendJSONresponse(res, 200, blog);
			});
	} else {
		console.log('No blogid specified');
		sendJSONresponse(res, 404, {"message": "No blogid in request"});
	}
};

/* GET a list of all blogs */
module.exports.blogGetAll = function(req, res) {
	console.log('Getting blog list');
	Blog
		.find()
		.exec(function(err, results) {
			if (!results) {
				sendJSONresponse(res, 404, {"message": "No blogs found"});
				return;
			} else if (err) {
				console.log(err);
				sendJSONresponse(res, 404, err);
				return;
			}
			console.log(results);
			sendJSONresponse(res, 200, buildBlogList(req, res, results));
		});

};

var buildBlogList = function(req, res, results) {
	var blogs = [];
	results.forEach(function(obj) {
		blogs.push({
			blogTitle: obj.blogTitle,
			blogText: obj.blogText,
			createdOn: obj.createdOn,
			_id: obj._id
		});
	});
	return blogs;
};

/*POST a new blog */
module.exports.blogCreate = function(req, res) {
	console.log(req.body);
	Blog
		.create({
			blogTitle: req.body.blogTitle,
			blogText: req.body.blogText,
			createdOn: req.body.createdOn
		}, function(err, blog) {
			if (err) {
				console.log(err);
				sendJSONresponse(res, 400, err);
			} else {
				console.log(blog);
				sendJSONresponse(res, 201, blog);
			}
		}
	);
};

/* Update one blog entry */
module.exports.blogUpdateOne = function(req, res) {
	console.log("Updating a blog entry with id of " + req.params.blogid);
	console.log(req.body);
	Blog
		.findOneAndUpdate(
			{ _id: req.params.blogid },
			{ $set: {"blogTitle": req.body.blogTitle, "blogText": req.body.blogText, "createdOn": req.body.createdOn}},
			function(err, response) {
				if (err) {
					sendJSONresponse(res, 400, err);
				} else {
					sendJSONresponse(res, 200, response);
				}
			}
	);
};

/*DELETE one blog */
module.exports.blogDeleteOne = function(req, res) {
	console.log("Deleting blog entry with id of " + req.params.blogid);
	console.log(req.body);
	Blog
		.findByIdAndRemove(req.params.blogid)
		.exec (
			function(err, response) {
				if (err) {
					sendJSONresponse(res, 404, err);
				} else {
					sendJSONresponse(res, 204, null);
				}
			}
		);
};
