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
		// console.log("friendData: ", friendData);
		//loop through scores, parsing into integers
		//save req.body.scores to new scores array of integers
		// var scores = req.body.scores;
		// for(i = 0; i < scores.length; i++) {
		// 	scores[i] = parseInt(scores[i]);
		// }
		// //console.log("scores: ", scores);
		// //var minDiff = 0;

		// //getting differences
		// for(i = 0; i < friendData.length; i++) {
		// 	///var originalScoresArray = [];
		// 	//var originalScores = friendData[0].scores;
		// 	originalScoresArray.push(originalScores);
		// 	originalScoresArray.push(req.body.scores);
		// 	// var userScores = req.body.scores;
		// 	// var scoresDiff = originalScores - userScores;

		// 	console.log("original scores: ", originalScores);
		// 	console.log("originalScoresArray: ", originalScoresArray);
		// 	// console.log("req.body.scores: ", userScores);
		// 	// console.log("score difference: ", scoresDiff);
		// 	console.log("====================");
		// }
		
		for (var i = 0; i < friendData.length; i++){

			//save each score array into a variable
			console.log(friendData[i].scores);
			console.log("-------------------------");
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
			var diff = friendSum - userSum;
			console.log("diff: ", diff);

			//convert number to positive if it's negative by returning the absolute value
			if (diff < 0) {
				var positiveDiff = Math.abs(diff);
			}

		}



		// if (friendData.includes(req.body)) {
		// 	console.log("match");
		// }

		friendData.push(req.body);
		//send back friend match to go in the modal


		res.json(friendData);
	});


}

