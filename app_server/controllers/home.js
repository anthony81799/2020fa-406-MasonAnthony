var request = require('request');
var apiOptions = {
	server : "https://localhost:80"
};

/* GET home page */
module.exports.home = function(req, res) {
	res.render('home', { title: 'Anthony Mason\'s Blog Site' });
};
