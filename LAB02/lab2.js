const prompt = require('prompt');

prompt.start();

function playGame() {
    prompt.get(['userSelection'], function (err, result) {
        if (err) {
            console.error(err);
            return;
        }

        const userSelection = result.userSelection.toUpperCase();

        const randomNum = Math.random();

        let computerSelection;
        if (randomNum <= 0.34) {
            computerSelection = 'ROCK';
        } else if (randomNum <= 0.67) {
            computerSelection = 'SCISSORS';
        } else {
            computerSelection = 'PAPER';
        }

        console.log("User choice: " + userSelection);
        console.log("Computer choice: " + computerSelection);

        let finalResult;
        if (userSelection === computerSelection) {
            finalResult = "It's a tie";
        } else if (
            (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
            (userSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
            (userSelection === 'PAPER' && computerSelection === 'ROCK')
        ) {
            finalResult = "User Wins";
        } else {
            finalResult = "Computer Wins";
        }
        console.log(finalResult);

        prompt.get(['playAgain'], function (err, result) {
            if (err) {
                console.error(err);
                return;
            }

            const playAgain = result.playAgain.toLowerCase();
            if (playAgain !== "yes") {
                console.log("Thanks for playing!!");
            } else {
                playGame();
            }
        });
    });
}

playGame();
