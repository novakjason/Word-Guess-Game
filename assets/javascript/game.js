// Create array of random words for user to guess.
const animals = ["cougar", "raccoon", "alligator", "coyote", "bison", "eagle", "bear", "bobcat", "rattlesnake", "deer"];
console.log(animals);


// Choose random word to display.
var randomAnimal = animals[Math.floor(Math.random() * animals.length)];
console.log(randomAnimal);


// Select characters of the word and display an underscore for each character.
var underscore = [];

var displayUnderscore = () => {
    for (var i = 0; i < randomAnimal.length; i++) {
        underscore.push('_');
    }
    return underscore;
}
console.log(displayUnderscore());


// Get users guess via keyboard input.
document.onkeyup = function(keyselect) {
    console.log(keyselect);
}



// Check to see if users guess is correct.
//     -If correct push selected letter to display in place of designated underscore.
//     -If incorrect push selected letter to display in incorrect letter array and subtract 1 guess from guesses remaining object.

// Empty array for incorrect letters guessed.

var wrongGuess = [];

// Object for guesses remaining and number of wins.

var tallyGuess = 10;

var winStreak = 0;