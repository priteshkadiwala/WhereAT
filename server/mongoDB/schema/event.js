var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require("./user.js");
var At = require("./at.js");

var EventSchema = new Schema({
	creator: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
	name: String,
	description: String,
	location: {type:mongoose.Schema.Types.ObjectId, ref: 'At'},
	time: Date
});

var Event = mongoose.model('Event', EventSchema);
module.exports = Event;