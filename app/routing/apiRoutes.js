// Dependencies
const friends = require("../data/friends");
const express = require("express");
const app = express();


//GET
app.get('/friends', function(req, res){
    res.send(friends);
})

// POST
app.post('/friends', function (req, res) {

    // push new friend into the friends array at the beginning [0]
    // friends.unshift(req.body); 
    friends.unshift(req.body);
    
    // assigning webpage input scores into a variable
    let newFriendScores = req.body.scores;
    // an array to hold the differences of each friend's score between each friends array.
    let allDifferencesArray = [];

    // loop for each difference score.
    for (let i = 0; i < friends.length; i++){

        // Variable to hold each score's difference.
        let differenceScore = 0;

        // loop for each score within each scores array of each friend.
        for (let j = 0; j < friends[i].scores.length; j++){
            differenceScore += Math.abs(friends[i].scores[j]-newFriendScores[j]);
        }
        // push each difference score to the end of allDifferencesArray.
        allDifferencesArray.push(differenceScore);
    }

    // Returns the index number of the closest number difference between 
    function closestFriend(array){
        var closestDifference = array[0];
        var diff = Math.abs (0 - closestDifference);
        // variable to hold the number for the index i will use to match the friend.
        let indexOfMatch = 0;
        for (var index = 0; index < array.length; index++) {
            // variable to track 
            var newdiff = Math.abs (0 - array[index]);
            if (newdiff < diff) {
                diff = newdiff;
                closestDifference = array[index];
                indexOfMatch = index+1;
            }
        }
        return indexOfMatch;
    }
    
    //send the friend with the index of the person with the least amount of difference in scores.
    res.send(friends[closestFriend(allDifferencesArray.slice(1))]);
}); 

module.exports = app;