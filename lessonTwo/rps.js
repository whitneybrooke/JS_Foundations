const readline = require('readline-sync');
const CHOICES = ["\n 'r' for rock,\n 'p' for paper,\n 's' for scissors,\n'l' for lizard',\n 'sp' for spock"];
const VALID_CHOICES = ['r', 'p', 's', 'l', 'sp'];
let totalHumanChoice = 0;
let totalCompChoice = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return (choice === 'r' && computerChoice === 's') ||
         (choice === 'r' && computerChoice === 'l') ||
         (choice === 'p' && computerChoice === 'r') ||
         (choice === 'p' && computerChoice === 'sp') ||
         (choice === 's' && computerChoice === 'p') ||
         (choice === 's' && computerChoice === 'l') ||
         (choice === 'l' && computerChoice === 'p') ||
         (choice === 'l' && computerChoice === 'sp') ||
         (choice === 'sp' && computerChoice === 'r') ||
         (choice === 'sp' && computerChoice === 's');
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
    totalHumanChoice++;
  } else if (playerWins(computerChoice, choice)) {
    totalCompChoice++;
  }
}

prompt('Welcome to rock, paper, scissors, lizard, spock!');
prompt('You will play up to five rounds!');
prompt('The first player to reach 3 wins, will win the game!');

while (true) {
  prompt(`Choose one: ${CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  tallyWinner(choice, computerChoice);

  prompt(`You have won: ${totalHumanChoice} times. The computer has won ${totalCompChoice} times.`);

  if (totalHumanChoice === 3) {
    prompt('You win the game!!');
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
    if (answer[0] === 'y') {
      console.clear();
      totalCompChoice = 0;
      totalHumanChoice = 0;
    } else if (answer[0] !== 'y') break;
  }

  if (totalCompChoice === 3) {
    prompt('The computer wins! You lost the game (whomp, whomp).');
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
    if (answer[0] === 'y') {
      console.clear();
      totalCompChoice = 0;
      totalHumanChoice = 0;
    } else if (answer[0] !== 'y') break;
  }
}

