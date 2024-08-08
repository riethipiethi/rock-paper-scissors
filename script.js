/* CLI version of the famous game 'Rock Paper Scissors'*/

const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Current score: Human ${humanScore}   Computer ${computerScore}`)
    }
    if (humanScore > computerScore) {
        console.log("Congrats! You win the whole game :)");
    } else if (humanScore < computerScore) {
        console.log("Bummer.. You lose the whole game :(");
    } else {
        console.log("Wow! It's a tie!");
    }
}

function playRound(humanChoice, computerChoice) {
    let indexHumanChoice = POSSIBLE_CHOICES.indexOf(humanChoice);
    let indexComputerChoice = POSSIBLE_CHOICES.indexOf(computerChoice);
    let indexDifference = indexHumanChoice - indexComputerChoice;
    if (indexDifference === 0) {
        console.log(`Tie! Both players chose ${capitalize(humanChoice)}`)
    } else if (indexDifference === 1 || indexDifference === -2) {
        console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
        humanScore++;
    } else {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
        computerScore++;
    }
}

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return POSSIBLE_CHOICES[0];
    } else if (randomNumber < 2 / 3) {
        return POSSIBLE_CHOICES[1];
    } else {
        return POSSIBLE_CHOICES[2];
    }
}

function getHumanChoice() {
    let choice = "";
    do {
        choice = prompt("What do you choose?");
        if (POSSIBLE_CHOICES.indexOf(choice.toLowerCase()) === -1) {
            alert(`You have to choose between "${POSSIBLE_CHOICES[0]}", "${POSSIBLE_CHOICES[1]}" and "${POSSIBLE_CHOICES[2]}"`);
        }
    } while (POSSIBLE_CHOICES.indexOf(choice.toLowerCase()) === -1);
    return choice;
}

function capitalize(text) {
    return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
}