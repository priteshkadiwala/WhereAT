var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var At = require("./at.js");

var TagSchema = new Schema({
	name: String,
	ats: [{type:mongoose.Schema.Types.ObjectId, ref: 'At'}]
});

var Tag = mongoose.model('Tag', TagSchema);
module.exports = Tag;