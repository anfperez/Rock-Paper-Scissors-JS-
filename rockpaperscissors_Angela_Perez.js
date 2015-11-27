function getPlayerMove() {
    var playerMove = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    alert("You have chosen" + playerMove + ".");
    return playerMove;
};

function getComputerMove() {
    var computerMove = Math.random();
    if (computerMove < 0.33) {
        alert("The computer has chosen rock.");
        computerMove == "rock";
    } else if (computerMove < 0.66) {
        alert("The computer has chosen paper.");
        computerMove == "paper";
    } else {
        alert("The computer has chosen scissors.");
        computerMove == "scissors";
    }
    return computerMove;
}

var playerWins == 0;
var computerWins == 0;

function getWinner(playerMove, computerMove) {
    if playerMove == "rock" {
        if computerMove == "scissors" {
            alert("Rock beats scissors. The player has won.");
            return "player"
            playerWins++;
        };
        else if computerMove == "paper" {
            alert("Paper beats rock. The computer has won.");
            return "computer";
            computerWins++;
        };
        else {
            alert("Both choose rock. It's a tie!")
        };
    };
    else if playerMove == "scissors" {
        if computerMove == "scissors" {
            alert("Both choose scissors. It's a tie!");
        }
        else if computerMove == "paper" {
            alert("Scissors beats paper. The player has won.");
            return "player";
            playerWins++;
            {
        else {
            alert("Rock beats paper. The computer has won.")
            return "computer";
            computerWins++;
        };
    };
    else {
        if computerMove == "scissors" {
            alert("Scissors beats paper. The computer has won.");
            return "computer"
            computerWins++;
        };
        else if computerMove == "paper" {
            alert("Both choose paper. It's a tie!");
        };
        else {
            alert("Paper beats rock. The player has won!");
            return "player";
            playerWins++;
        };
     };
};

function playToFive {
    if (playerWins == 5) {
        alert("Player has won 5 times! You win!");
    }
    else if (computerWins == 5) {
        alert("Computer has won 5 times! You lose!");
    }
    else 
        getPlayerMove;
        getcomputerMove;
        getWinner;
    };
    }