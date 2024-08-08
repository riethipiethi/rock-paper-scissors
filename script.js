/* CLI version of the famous game 'Rock Paper Scissors'*/

const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];
let humanScore, computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);

function playRound(humanChoice, computerChoice) {
    let indexHumanChoice = POSSIBLE_CHOICES.indexOf(humanChoice);
    let indexComputerChoice = POSSIBLE_CHOICES.indexOf(computerChoice);
    let indexDifference = indexHumanChoice - indexComputerChoice;
    if (indexDifference === 0) {
        console.log(`Tie! Both players chose ${humanChoice}`)
    } else if (indexDifference === 1 || indexDifference === -2) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
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
            alert(`You have to choose between "${POSSIBLE_CHOICES[0]}",\
                "${POSSIBLE_CHOICES[1]}" and "${POSSIBLE_CHOICES[2]}".`);
        }
    } while (POSSIBLE_CHOICES.indexOf(choice.toLowerCase()) === -1);
    return choice;
}