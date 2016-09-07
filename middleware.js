
// Use module exports to expose middleware.

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


module.exports = middleWare
