// How many wins you have
var wins = 0;

// How many losses you have

var losses = 0;

// Gem Counter
var yourNumber = 0;

//
$("#gem1").on("click", function() {
    yourNumber += 5;
    $("yourNumber").text(yourNumber);
});

$("#gem2").on("click", function() {
    yourNumber += 1;
    $("yourNumber").text(yourNumber);
});

$("#gem3").on("click", function() {
    yourNumber += 4;
    $("yourNumber").text(yourNumber);
});

$("#gem4").on("click", function() {
    yourNumber += 8;
    $("yourNumber").text(yourNumber);
});

// The number that is randomly generated for each game
var guessTheNumber = Math.floor(Math.random() * Math.floor(50));

$("#guessTheNumber").text(guessTheNumber)

if (yourNumber === guessTheNumber) {
    wins++;
    alert("you win!");
    };

// Resetting the game when you go over guessTheNumber
function loseReset() {
    losses++;
};


