var mongoose = require('mongoose');
var At = require("./schema/at.js");
var User = require("./schema/user.js");
var Review = require("./schema/review.js");
var Tag = require("./schema/tag.js");
var Event = require("./schema/event.js");

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

var createAt = function(name, description, lat, long) {
	var at = new At({
		name: name,
		description: description,
		lat: lat,
		long: long,
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

var createTag = function(name) {
	var tag = new Tag({
		name: name,
		ats: []
	});
	tag.save(function(err){
		if(err) throw err;
	});
};

var createEvent = function(name, description, email, location) {
	var event = new Event({
		name: name,
		description: description,
		time: Date.now()
		//creator:
		//location:
	});
};

var updateAt = function(At, name, description, lat, long, review, tag) {

	At.name: name,
	At.description: description,
	At.lat: lat,
	At.long: long,
	At.review: review,
	At.tag: tag
}

module.exports = {
	//add all functions in here
	createUser,
	createEvent,
	createTag,
	createReview,
	createAt
};
