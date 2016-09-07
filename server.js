var express = require('express');
var app = express()
var port = 3000;


var middleWare = {

	requireAuthentication: function (request, response, next) {

		console.log("Private Route Hit");
		next();

	},
	logger: function (request, response, next) {

		// newDate().toString()

		console.log("Request: " + request.method + " " + request.originalUrl);
		console.log("Made on date: " + new Date().toString());
		next();
	}

};


app.use(middleWare.logger);



app.get('/about/', function (request, response) {

	response.send('My name is Harry Ferrier. I am 28 years old, and from Cardiff.');


});


app.use(express.static(__dirname + "/public"));


app.listen(port, function () {

	console.log('Express Server is listening on localhost ' + port);

});