//link routes to data held in friends.js file
const friendData = require("../data/friends.js");

//GET requests to handle when users visit a page
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendData);
	});

	//POST requests to submit data to the server
	app.post("/api/friends", function(req, res) {
		//set the best possible difference as the highest number possible (because smallest number possible will be the one we want)
		let bestDiff = 50;
		//set empty variable to hold closest match
		let match = {};

		//loop through all the friend data
		for (var i = 0; i < friendData.length; i++){
			//save each score array into a variable
			var friendScores = friendData[i].scores;
			//add all those scores and save as friendSum
			var friendSum = friendScores.reduce(function (a, b) {
				return a + b;
			}, 0);
			console.log("friend sum: ", friendSum);

			//parse the user choices into integers, because the form returns an array of strings
			var userScores = req.body.scores;
			for(j = 0; j < userScores.length; j++) {
				userScores[j] = parseInt(userScores[j]);
			}

			//add all the user scores and save the sum to userSum
			var userSum = userScores.reduce(function (a, b) {
				return a + b;
			}, 0);
			console.log("user sum: ", userSum);

			//compare user sum against all friend sums to find closest match
			//use Math.abs to set it to absolute value to avoid negatives
			var diff = Math.abs(friendSum - userSum);
			console.log("diff: ", diff);			
			console.log("best diff: ", bestDiff);
			//find the closest match to the user's score 
			if (diff <= bestDiff) {
				bestDiff = diff;
				console.log("new best diff: ", bestDiff);
				//set the match to the friend data at the index of the closest match
				match = friendData[i];
				console.log("match info: ", match);

			}
		}
		friendData.push(req.body);
		res.json(match);
	});


}

