
//DOMimport
const humanShowScore = document.querySelector(`#human`);
const computerShowScore = document.querySelector(`#computer`);
const choiceShow = document.querySelector(`#choice`);
const buttonsBox = document.querySelector(`#buttons-box`);
const displayChoice = document.querySelector(`#display-choice`);
//buttons DOM
const start = document.querySelector(`#start-button`);

start.addEventListener(`click`, clickStart);

//rockButton
const rockButton = document.createElement(`button`);
rockButton.setAttribute(`id`, `rockButton`);
rockButton.classList.add(`buttons-style`);
rockButton.textContent = `🪨`;
//paperButton
const paperButton = document.createElement(`button`);
paperButton.setAttribute(`id`, `paperButton`);
paperButton.classList.add(`buttons-style`);
paperButton.textContent = `📜`;
//sciccorsButton
const sciccorsButton = document.createElement(`button`);
sciccorsButton.setAttribute(`id`, `sciccorsButton`);
sciccorsButton.classList.add(`buttons-style`);
sciccorsButton.textContent = `✂️`;

//choices
const humanchose = document.createElement(`h5`);
displayChoice.appendChild(humanchose);
humanchose.style.justifyContent = `center`;
rockButton.addEventListener(`click`, () => {
    humanChoice = 0;
    humanchose.textContent = `Human Chose Rock!`;
    mainGame();
});
paperButton.addEventListener(`click`, () => {
    humanChoice = 1;
    humanchose.textContent = `Human Chose Paper!`;

    mainGame();
});
sciccorsButton.addEventListener(`click`, () => {
    humanChoice = 2;
    humanchose.textContent = `Human Chose Scissor!`;
    mainGame();
});

//on start button click
function clickStart() {
    start.remove();
    buttonsBox.appendChild(rockButton);
    buttonsBox.appendChild(paperButton);
    buttonsBox.appendChild(sciccorsButton);
    choice.textContent = `Choose Option`;
    console.log(`Game Start!`);
    playGame();
    
};

//variables
let humanChoice = -1;
let computerChoice = -1;
let humanString = 'none';
let computerString = 'none';

let humanScore = 0;
let computerScore = 0;  

const roundsTotal = 5;


//dont touch
function getComputerChoice() {
    const computedNumber = Math.floor(Math.random() * 3);
    if (computedNumber == 0) {
        console.log('Computer chose Rock');
        choiceShow.textContent = 'Computer chose Rock';
        computerChoice = 0;
        return 'Rock';
    } else if (computedNumber == 1) {
        console.log('Computer chose Paper');
        choiceShow.textContent = 'Computer chose Paper';
        computerChoice = 1;
        return 'Paper';
    } else {
        console.log('Computer chose Scissors');
        choiceShow.textContent = 'Computer chose Scissors';
        computerChoice = 2;
        return 'Scissors';
    };
};

function playerToString(humanChoice) {
    if (humanChoice == 0) {
        humanString = 'Rock';
    } else if (humanChoice == 1){
        humanString = 'Paper';
    }else {
        humanString = 'Scissors';
    };
    
};




//dont touch
function playRound(computerChoice, humanChoice) {
    if (computerChoice > humanChoice) {
        console.log('computer wins! ' + computerString + ' beats ' + humanString);
        computerScore += 1;
        
        
        
    } else if (humanChoice > computerChoice) {
        console.log('human wins! '+ humanString + ' beats ' + computerString)
        humanScore += 1;
        
    } else {
        console.log('Its a tie!');
    };
    
};

//dont touch
function computerToString(computerChoice) {
    if (computerChoice == 0) {
        computerString = 'Rock';
    } else if (computerChoice == 1){
        computerString = 'Paper';
    }else {
        computerString = 'Scissors';
    };
    
};




// no touch
function displayScore(computerScore, humanScore) {
    console.log('Human score is ' + humanScore);
    console.log('Computer score is ' + computerScore);
    computerShowScore.textContent = computerScore;
    humanShowScore.textContent = humanScore;
};

//change to dom
function gameWinner() {
    if (humanScore > computerScore) {
        console.log('========🏆=🏆=🏆==========')
        console.log('HUMAN WON THE GAME!')
        choiceShow.textContent = `HUMAN WON THE GAME!`
        
        console.log('========🏆=🏆=🏆==========')
    } else if (computerScore > humanScore) {
        console.log('========🏆=🏆=🏆==========')
        console.log('COMPUTER WON THE GAME!')
        choiceShow.textContent = `COMPUTER WON THE GAME! `;
        console.log('========🏆=🏆=🏆==========')
    }
};  

//not change
function mainGame() {
    console.log('==============ROUND=============')
    getComputerChoice();
    
    computerToString(computerChoice);

    console.log('------CHOICE-------')
    playRound(computerChoice, humanChoice);
    console.log('------SCORES-------')
    displayScore(computerScore, humanScore);

};

// change to 5 wins
function playGame() {
    
    for (let i = roundsTotal; i > computerScore || i > humanScore; i--){
        mainGame();
    };

    gameWinner();
    
};
