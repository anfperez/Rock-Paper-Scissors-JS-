var playerWins = 0,
    computerWins = 0;


function getPlayerMove() {
    var playerMove = prompt("Please choose either 'rock', 'paper', or 'scissors'. Type `quit` to quit.");
    alert("You have chosen " + playerMove + ".");
    return playerMove;
};

function getComputerMove() {
    var computerMove = Math.random();
    if (computerMove < 0.33) {
        alert("The computer has chosen rock.");
        computerMove = "rock";
    } else if (computerMove < 0.66) {
        alert("The computer has chosen paper.");
        computerMove = "paper";
    } else {
        alert("The computer has chosen scissors.");
        computerMove = "scissors";
    }
    return computerMove;
}

function getWinner(playerMove, computerMove) {
    if (playerMove != 'rock' && 
        playerMove != 'scissors' && 
        playerMove != 'paper') {
        alert(playerMove + ' is a wrong selection');
    }
    else if (playerMove === computerMove) {
        alert("Both choose " + computerMove + ". It's a tie!");
    }
    // no more ties below this line
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            alert("Rock beats scissors. The player has won.");
            playerWins++;
        } else { 
            alert("Paper beats rock. The computer has won.");
            computerWins++;
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            alert("Scissors beats paper. The player has won.");
            playerWins++;
        } else {
            alert("Rock beats paper. The computer has won.")
            computerWins++;
        }
    } else {
        if (computerMove === "scissors") {
            alert("Scissors beats paper. The computer has won.");
            computerWins++;
        } else {
            alert("Paper beats rock. The player has won!");
            playerWins++;
        }
    }
}

function playToFive() {
    if (playerWins === 5) {
        alert("Player has won 5 times! You win!");
    } else if (computerWins === 5) {
        alert("Computer has won 5 times! You lose!");
    } else {
        var p = getPlayerMove();
        var c = getComputerMove();
        getWinner(p, c);
        if(p != 'quit') {
          playToFive();
        }
    }    
}

function start(){
  playerWins = 0;
  computerWins = 0;
  playToFive();
}