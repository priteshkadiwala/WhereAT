var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Tag = require("./tag.js");
var Review = require("./review.js");
var Event =  ("./event.js");

var AtSchema = new Schema({
	name: String,
	description: String,
	lat: int,
	long: int,
	reviews:[{type:mongoose.Schema.Types.ObjectId, ref: 'Review'}],
	tags:[{type:mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
	votes: int
});


var At = mongoose.model('At', AtSchema);
module.exports = At;
