var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require("./user.js");
var At = require("./at.js");

var ReviewSchema = new Schema({
	text: String,
	author: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
	location: {type:mongoose.Schema.Types.ObjectId, ref: 'At'},
	votes: Number,
	date: Date
});

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;