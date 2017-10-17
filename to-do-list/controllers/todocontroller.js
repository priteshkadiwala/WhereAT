var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect("mongodb://test:test@ds147884.mlab.com:47884/todo");
//create schema
var todoSchema = new mongoose.Schema( {
	item: String
});

var Todo = mongoose.model('Todo', todoSchema);
//var item1 = Todo({item: 'buy milk'}).save(function(err) {
//	if (err) throw err;
//	console.log('item saved');
//});

//var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'get gas'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

	app.get('/todo', function(req, res) {
		Todo.find({}, function(err, data) {
			if (err) throw err;
			res.render('todo', {todos: data});
		});
	});
	app.post('/todo', urlencodedParser, function(req, res) {
		var newTodo = Todo(req.body).save(function(err, data) {
			if (err) throw err;
			res.json(data);
		});
	});
	app.delete('/todo/:item', function(req, res) {
		Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
			if (err) throw err;
			res.json(data);

		});
	});
};