var mongoose = require('mongoose');
var Blog = mongoose.model('blogger');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};
