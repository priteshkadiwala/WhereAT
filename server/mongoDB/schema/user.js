var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var At = require("./at.js");
var Review = require("./review.js");
var Event =  ("./event.js");

var UserSchema = new Schema({
	username: String,
	email: String,
	password: String,
	favorites: [{type:mongoose.Schema.Types.ObjectId, ref: 'At'}],
	reviews: [{type:mongoose.Schema.Types.ObjectId, ref: 'Review'}],
	events: [{type:mongoose.Schema.Types.ObjectId, ref: 'Event'}]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
