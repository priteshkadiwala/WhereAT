var mongoose = require('mongoose');
var At = reuqire("./schema/at.js");
var User = require("./schema/user.js");
var Review = require("./schema/review.js");
var Tag = require("./schema/tag.js");
var Event = reuqire("./schema/event.js");

var createUser = function(email, username, userLevel) {
	var user = new User({
		username: username,
		email: email,
		userLevel:userLevel,
		favorites: [],
		reviews: [],
		events:[]
	});
	user.save(function(err){
		if(err) throw err;
	});
};

var createAt = function(name, description) {
	var at = new At({
		name: name,
		description: description,
		reviews: [],
		tags: [],
		votes: 0
	});
	at.save(function(err){
		if(err) throw err;
	});
};


//NOT DONE NOT DONE NOT DONE NOT DONE
var createReview = function(text, email, location ) {
	var review = new Review({
		text: String,
		votes: 0,
		date: Date.now()
	});
	review.save(function(err){
		if(err) throw err;
	})
};

var createTag = function() {
	return;
};

var createEvent = function() {
	return;
};

module.exports = {
	//add all functions in here
	createUser,
	createEvent,
	createTag,
	createReview,
	createAt
};