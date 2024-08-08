/* CLI version of the famous game 'Rock Paper Scissors'*/

const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];

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
        if (POSSIBLE_CHOICES.indexOf(choice) === -1) {
            alert(
                `You have to choose between "${POSSIBLE_CHOICES[0]}", "${POSSIBLE_CHOICES[1]}" and "${POSSIBLE_CHOICES[2]}".`
            );
        }
    } while (POSSIBLE_CHOICES.indexOf(choice) === -1);
    return choice;
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(humanChoice);
console.log(computerChoice);