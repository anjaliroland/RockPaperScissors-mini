// TODO: collect and store user input ✅
    // TODO: use popup window to allow user to pick R, P, or S ✔️
    // TODO: store result in a variable called userChoice ✔️
    // TODO: EDGE CASE: what happens if the user picks another letter ✔️
    // TODO: EDGE CASE: what happens if they use a lowercase variable ✔️

// TODO: randomly let computer pick and store in variable ✅
    // TODO: possible choices inclue R, P, or S ✔️
    // TODO: store in variable called compChoice ✔️

// TODO: compare user and computer choice ✅
// TODO: display results of game ✅
    // TODO: if user = rock and comp = scissors or user = scissors and comp = paper or user = paper and comp = rock, user wins ✔️
    // TODO: if user = rock and comp = paper or user = scissors and comp = rock or user = paper and comp = scissors, comp wins ✔️
    // TODO: if user = rock and comp = rock or user = scissors and comp = scissors or user = paper and comp = paper, tie ✔️

// TODO: display stats ✅
    // TODO: track wins, losses and ties ✔️
    // TODO: display all three in one screen ✔️

// TODO: ask user if they want to play again ✅
    // TODO: if they say yes, restart whole game ✔️
    // TODO: if they say no, stop doing anything ✔️

var wins = 0;
var ties = 0;
var losses = 0;

var choices = ["R", "P", "S"];

 function playGame() {
    var userChoice = window.prompt("Enter R, P, or S");

    userChoice = userChoice.toUpperCase();
    console.log(userChoice);
    
    var compChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice == "R" || userChoice == "S" || userChoice == "P") {
        if (userChoice === compChoice) {
            ties++;
            window.alert("It's a tie!");
        } else if (
            (userChoice === "R" && compChoice === "S") ||
            (userChoice === "S" && compChoice === "P") ||
            (userChoice === "P" && compChoice === "R")
        ) {
            wins++;
            window.alert("You won!🎉");
        } else {
            losses++;
            window.alert("You lost👎");
        };

        window.alert("STATS \nWins: " + wins + "\n" + "Ties: " + ties + "\n" + "Losses: " + losses);

        function playAgain() {
            if (confirm("Do you want to play again?")) {
                playGame();
            } else {
                return;
            };
        };
        playAgain();

    } else {
        window.alert("Invalid input, try again");
        playGame();
    };
};
playGame();