var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var At = require("./at.js");
var Review = require("./review.js");
var Event =  ("./event.js");
var User = require("./user.js");

var AdminSchema = new Schema({
  username: String,
  email: String,
  password: String,
  favorites: [{type:mongoose.Schema.Types.ObjectId, ref: 'At'}],
  reviews: [{type:mongoose.Schema.Types.ObjectId, ref: 'Review'}],
  events: [{type:mongoose.Schema.Types.ObjectId, ref: 'Event'}]


});

var deleteUser = function(User) {

  //remove user from database
});

var deleteAt = function(At) {

  //remove At from database
});

var Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;
