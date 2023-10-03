// Create a function getComputerChoice that randomly returns 'Rock', 'Paper', 'Scissors'
function getComputerChoice() {
    const rps = ['rock', 'paper', 'scissors']; // Array of choices 
    let randomChoice = Math.floor(Math.random()*rps.length); // Choose random item from array
    let choice = rps[randomChoice]; // Computer's choice
    return choice
};


// Create a function playRound that plays a single round of Rock Paper Scissors. Function takes two parameters playerSelection, computerSelection.
// returns a string that declares winner of round like so: 'You Lose! Paper beats Rock'
// Make playerSelection case-insensitive 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'Tie!'
    // Lose
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            return 'You Lose! Paper beats Rock'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors'
    } // Win 
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors'

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock'
        
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beats Paper'
    };
};

// NOTE: return results, NOT console.log()

// Create function game()
// Use the previous function inside this one to play 5 rounds (loop), keeps track of score and reports winner and loser at end.
// Use console.log() to display result of each round and winner
// Use prompt() to get input from the user