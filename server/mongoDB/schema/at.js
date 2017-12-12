var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Tag = require("./tag.js");
var Review = require("./review.js");
var Event =  ("./event.js");

var AtSchema = new Schema({
	name: String,
	description: String,
	hours: String,
	latitude: Number,
	longitude: Number,
	pictureUrls: [String],
	reviews:[{type:mongoose.Schema.Types.ObjectId, ref: 'Review'}],
	tags:[{type:mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
	events:[{type:mongoose.Schema.Types.ObjectId, ref: 'Event'}],
	votes: Number
});


var At = mongoose.model('At', AtSchema);
module.exports = At;