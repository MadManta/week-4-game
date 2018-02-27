// How many wins you have
var wins = 0;

// How many losses you have

var losses = 0;

// Gem Counter
var yourNumber = 0;

// Random Number Exists in Global

var guessTheNumber;

// Boolean for game running

var isRunning = false;

// Function to start game

$("#gem1").on("click touch", function() {
    yourNumber += number1;
    $("#yourNumber").html(yourNumber);
    guessCheck();
});

$("#gem2").on("click touch", function() {
    yourNumber += number2;
    $("#yourNumber").html(yourNumber);
    guessCheck();
});

$("#gem3").on("click touch", function() {
    yourNumber += number3;
    $("#yourNumber").html(yourNumber);
    guessCheck();
});

$("#gem4").on("click touch", function() {
    yourNumber += number4;
    $("#yourNumber").html(yourNumber);
    guessCheck();
});


function start() {

// Reset Numbers

guessTheNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

$("#theNumber").html(guessTheNumber)

yourNumber = 0;
$("#yourNumber").html(yourNumber)

// Gem Numbers

number1 = Math.floor(Math.random() * (3 - 1 + 1) + 1);
number2 = Math.floor(Math.random() * (6 - 4 + 1) + 4);
number3 = Math.floor(Math.random() * (9 - 7 + 1) + 7);
number4 = Math.floor(Math.random() * (12 - 10 + 1) + 10);

//


};

// The number that is randomly generated for each game

function guessCheck() {
    if (guessTheNumber === yourNumber) {
        wins++;
        alert("you win!");
        $("#wins").text(wins);
        guessTheNumber = 0;
        yourNumber = 0;
        $("#yourNumber").text(yourNumber);
        number1 = 0;
        number2 = 0;
        number3 = 0;
        number4 = 0;
        start();
        }
    else if (yourNumber > guessTheNumber) {
        losses++;
        alert("you lose!");
        $("#losses").text(losses);
        guessTheNumber = 0;
        yourNumber = 0;
        $("#yourNumber").text(yourNumber);
        number1 = 0;
        number2 = 0;
        number3 = 0;
        number4 = 0;
        start();
    }
    else {

    };
};

$("#startbtn").on("click touch", function() {
    $(this).prop("disabled", true);
});
