//dependencies
var path = require("path");

//routing
module.exports = function(app) {
	//GET requests - when a user visits the page, they are shown the HTML content for that page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
}