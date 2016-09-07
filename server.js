var express = require('express');
var app = express()
var port = process.env.PORT || 3000;

var middleware = require('./middleware.js');


app.use(middleware.logger);



app.get('/about/', function (request, response) {

	response.send('My name is Harry Ferrier. I am 28 years old, and from Cardiff. I am currently learning Node.JS');


});


app.use(express.static(__dirname + "/public"));


app.listen(port, function () {

	console.log('Express Server is listening on localhost ' + port);

});