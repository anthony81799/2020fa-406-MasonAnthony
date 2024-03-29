var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
	blogTitle: String,
	blogText: String,
	createdOn: {
		type: Date,
		"default": Date.now()
	},
	authorName: String,
	authorEmail: String
});

mongoose.model('blogger', blogSchema);
