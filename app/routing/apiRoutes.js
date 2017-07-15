//link routes to data held in friends.js file

var friendData = require("../data/friends.js");

//routing
//GET requests to handle when users visit a page
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendData);
	});

	//POST requests to submit data to the server
	app.post("/api/friends", function(req, res) {
		friendData.push(req.body);
	})
}

