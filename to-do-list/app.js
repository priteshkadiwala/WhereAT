var express = require('express');
var app = express();
var todocontroller = require('./controllers/todocontroller');
//template enginee
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'));

//fire controllers
todocontroller(app);
//listen to port
app.listen(3000);
console.log("listening to port 3000");


