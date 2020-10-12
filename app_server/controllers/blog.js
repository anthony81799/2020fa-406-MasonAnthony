var request = require('request');
var apiOptions = {
	server : "https://52.90.99.247:80"
};

/* GET blogAdd page */
module.exports.blogAdd = function(req, res) {
	res.render('blogAdd', {title: 'Blog Add' });
};

/* blogAdd POST */
module.exports.addPost = function(req, res){
	var requestOptions, path, postData;
	path = '/api/blogs/';

	postData = {
		blogTitle: req.body.blogTitle,
		blogText: req.body.blogText,
		createdOn: req.body.createdOn
	};

	requestOptions = {
		url : apiOptions.server + path,
		method : "POST",
		json : postData
	};

	request(
		requestOptions,
		function(err, response, body) {
			if (response.statusCode === 201) {
				res.redirect('/blogList');
			} else {
				_showError(req, res, response.statusCode);
			}
		}
	);
};

/* _showError */
var _showError = function (req, res, status) {
	var title, content;
	if (status === 404) {
		title = "404, page not found";
		content = "Page cannot be found.  Please check URL and try again.";
	} else if (status === 500) {
		title = "500, Server Error";
		content = "Something is wrong with our server.  Please try again later."
	} else {
		title = status + ", an error has occurred.";
		content = "An error has occurred.";
	}
	res.status(status);
	res.render('generic-text', {
		title: title,
		content: content
	});
};

/* GET blogList page */
module.exports.blogList = function(req, res) {
	var requestOptions, path;
	path = '/api/blogs/';
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {}
		};
	request(
		requestOptions,
		function(err, response, body) {
			renderListPage(req, res, body);
		}
	);
};

/* Render blogList Page */
var renderListPage = function(req, res, responseBody){
	res.render('blogList',
		{
		title: 'Blog List',
		blogs: responseBody
	});
};

/* GET blogEdit page */
module.exports.blogEdit = function(req, res) {
	var requestOptions, path;
	path = "/api/blogs/" + req.params.blogid;
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {}
	};
	request(
		requestOptions,
		function(err, response, body) {
			renderEditPage(req, res, body);
		}
	);
};

/* Render the blogEdit Page */
var renderEditPage = function(req, res, responseBody){
	res.render('blogEdit', {title: 'Blog Edit',
		blog : responseBody
	});
};

/* blogEdit POST */
module.exports.editPost = function(req, res){
	var requestOptions, path, postData;
	path = '/api/blogs/' + req.params.blogid;

	postData = {
		blogTitle : req.body.blogTitle,
		blogText : req.body.blogText,
		createdOn : req.body.createdOn
	};

	requestOptions = {
		url : apiOptions.server + path,
		method : "PUT",
		json : postData
	};

	request(
		requestOptions,
		function(err, response, body) {
			if (response.statusCode === 200) {
				res.redirect('/blogList');
			} else {
				_showError(req, res, response.statusCode);
			}
		}
	);
};


/* GET blogDelete page */
module.exports.blogDelete = function(req, res) {
	var requestOptions, path;
	path = "/api/blogs/" + req.params.blogid;
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {}
	};
	request(
		requestOptions,
		function(err, response, body) {
			renderDeletePage(req, res, body);
		}
	);
};

/* Render blogDelete Page */
var renderDeletePage = function(req, res, responseBody){
	res.render('blogDelete', {
		title: 'Blog Delete',
		blog: responseBody
	});
};

/* blogDelete POST */
module.exports.deletePost = function(req, res){
	var requestOptions, path, postData;
	path = '/api/blogs/' + req.params.blogid;

	requestOptions = {
		url : apiOptions.server + path,
		method : "DELETE",
		json : {}
	};

	request(
		requestOptions,
		function(err, response, body) {
			if (response.statusCode === 204) {
				res.redirect('/blogList');
			} else {
				_showError(req, res, response.statusCode);
			}
		}
	);
};
