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
		console.log("req.body ", req.body);
		console.log("friendData ", friendData);
		//loop through scores, parsing into integers
		//save req.body.scores to new scores array of integers
		var scores = req.body.scores;
		for(i = 0; i < scores.length; i++) {
			scores[i] = parseInt(scores[i]);
		}
		console.log("scores: ", scores);
		var minDiff = 0;

		//getting differences
		for(i = 0; i < friendData.length; i++) {

		}

		// if (friendData.includes(req.body)) {
		// 	console.log("match");
		// }

		friendData.push(req.body);
		//send back friend match to go in the modal


		res.json(friendData);
	});


}

