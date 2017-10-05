var mongoose = require('mongoose');
var At = require("./schema/at.js");
var User = require("./schema/user.js");
var Review = require("./schema/review.js");
var Tag = require("./schema/tag.js");
var Event = require("./schema/event.js");

mongoose.connect("mongodb://app:app@ds111895.mlab.com:11895/whereat", {useMongoClient: true});

var createUser = function(email, username, firstName, lastName, userLevel) {
	var user = new User({
		username: username,
		email: email,
		firstName: firstName,
		lastName: lastName,
		userLevel:userLevel,
		favorites: [],
		reviews: [],
		events:[]
	});

	user.save(function(err){
		if(err) throw err;
	});
};

var updateUser = function(currEmail, newEmail, username, firstName, lastName) {
		User.findOne({email: currEmail}, function(err, user){
			user.email = newEmail;
			user.username = username;
			user.firstName = firstName;
			user.lastName = lastName;
			user.save(function(err){
				if(err) throw err;
			});
		});
};

var getUser = function(email) {
	User.findOne({email:email}, function(err, user) {
		if (err) throw err;
		return user;
	});
};

var createAt = function(name, description, hours, latitiude, longitude, tags[]) {
	var at = new At({
		name: name,
		description: description,
		hours: hours,
		latitiude: latitiude,
		longitude: longitude,
		pictureUrls: [],
		reviews: [],
		tags: [],
		events: [],
		votes: 0
	});
	for (var i = 0; i < tags.length; i++) {
		//todo: validate tag data
		addTag(user.name, tags[i]);
	}
	at.save(function(err){
		if(err) throw err;
	});
};

var updateAt = function(currName, newName, description, hours, latitiude, longitude) {
	At.findOne({name: currName}, function(err, at) {
		at.name = newName;
		at.description = description;
		at.hours = hours;
		at.latitiude = latitiude;
		at.longitude = longitude;
		at.save(function(err) {
			if(err) throw err;
		});
	});
};

var getAt = function(name) {
	At.findOne({name: name}, function(err, at){
		if err throw err;
		return at;
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

var addTag = function(at, tag) {
	At.findOne({name:at}, function(err, at){
		if(err) throw err;
		Tag.findOne({name:tag}, function(err1, tag){
			if(err) throw err;
			at.tags.push(tag);
			tag.ats.push(at);
			at.save(function(err){
				if(err) throw err;
			});
			tag.save(function(err){
				if(err) throw err;
			});			
		});
	});
}

var createEvent = function(name, description, email, location) {
	var event = new Event({
		name: name,
		description: description,
		time: Date.now()
		//creator:
		//location:
	});
};

var addPictureUrl = function(at, url) {
	At.findOne({name:at}, function(err, at){
		if(err) throw err;
		at.pictureUrls.push(url);
		at.save(function(err1){
			if(err1) throw err;
		});
	});
}

module.exports = {
	//add all functions in here
	createUser,
	updateUser,
	getUser,
	createEvent,
	createTag,
	createReview,
	createAt,
	updateAt,
	getAt,
	addTag,
	addPictureUrl
};