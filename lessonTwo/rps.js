const readline = require('readline-sync');
const CHOICES = ["\n 'r' for rock,\n 'p' for paper,\n 's' for scissors,\n'l' for lizard',\n 'sp' for spock"];
const VALID_CHOICES = ['r', 'p', 's', 'l', 'sp',];
let totalHumanChoice = 0;
let totalCompChoice = 0;
let answer = '';

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return (choice === 'r' && computerChoice === 's') ||
         (choice  === 'r' && computerChoice  === 'l') ||
         (choice  === 'p' && computerChoice === 'r') ||
         (choice  === 'p' && computerChoice  === 'sp') ||
         (choice  === 's' && computerChoice === 'p') ||
         (choice  === 's' && computerChoice === 'l') ||
         (choice === 'l' && computerChoice === 'p') ||
         (choice  === 'l' && computerChoice === 'sp') ||
         (choice  === 'sp' && computerChoice === 'r') ||
         (choice  === 'sp' && computerChoice === 's');
}

function namingTheChoices (choice) {
  if (choice === 'r' || choice === 'R') {
    return 'rock';
  } else if (choice === 'p' || choice === 'P') {
    return 'paper';
  } else if (choice === 's' || choice === 'S') {
    return 'scissors';
  } else if (choice === 'l' || choice === 'L') {
    return 'lizard';
  } else if (choice === 'sp' || choice === 'Sp') {
    return 'spock';
  }
  return choice;
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}

function tallyWinner (choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    totalHumanChoice += 1;
  } else if (playerWins(computerChoice, choice)) {
    totalCompChoice += 1;
  }
}

function playAgain () {
  prompt('Do you want to play again (y/n)?');
  answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
}

console.clear();

prompt('Welcome to rock, paper, scissors, lizard, spock!');
prompt('You will play up to five rounds!');
prompt('The first player to reach 3 wins, will win the game!');

while (true) {

  prompt(`Choose one: ${CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${namingTheChoices(choice)}, computer chose ${namingTheChoices(computerChoice)}`);

  tallyWinner(choice, computerChoice);

  displayWinner(choice, computerChoice);

  prompt(`You have won: ${totalHumanChoice} times. The computer has won ${totalCompChoice} times.`);

  prompt('Are you ready for the next round? Hit "y" when you"re ready!');
  let nextRound = readline.question().toLowerCase();

  while (nextRound !== 'y') {
    prompt("That's not a valid choice");
    nextRound = readline.question();
  }

  if (nextRound === 'y') {
    console.clear();
  }

  if (totalHumanChoice === 3) {
    prompt('You win the game!!');
    playAgain();
    if (answer === 'y') {
      console.clear();
      totalCompChoice = 0;
      totalHumanChoice = 0;
    } else if (answer !== 'y') break;
  } else if (totalCompChoice === 3) {
    prompt('The computer wins! You lost the game (whomp, whomp).');
    playAgain();
    if (answer === 'y') {
      console.clear();
      totalCompChoice = 0;
      totalHumanChoice = 0;
    } else if (answer !== 'y') break;
  }
}