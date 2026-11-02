let humanChoice = -1;
let computerChoice = -1;
let humanString = 'none';
let computerString = 'none';

let humanScore = 0;
let computerScore = 0;

let roundsTotal = 5;



function getComputerChoice() {
    const computedNumber = Math.floor(Math.random() * 3);
    if (computedNumber == 0) {
        console.log('Computer chose Rock');
        alert('Computer chose Rock');
        computerChoice = 0;
        return 'Rock';
    } else if (computedNumber == 1) {
        console.log('Computer chose Paper');
        alert('Computer chose Paper');
        computerChoice = 1;
        return 'Paper';
    } else {
        console.log('Computer chose Scissors');
        alert('Computer chose Scissors');
        computerChoice = 2;
        return 'Scissors';
    };
};

function getHumanChoice() {
    let humanChoiceprompt = prompt('Rock Paper or Scissors?');
    
    function formatChoice(){
        humanChoiceprompt = humanChoiceprompt.toLowerCase().trim();       
    };

    function choiceToNum() {
        if (humanChoiceprompt == 'rock') {
            humanChoice = 0;
            // console.log(humanThrow);
        } else if( humanChoiceprompt == 'paper'){
            humanChoice = 1;
            // console.log(humanThrow);
        } else if (humanChoiceprompt == 'scissors') {
            humanChoice = 2;
            // console.log(humanThrow);
        } else {
            console.log('not valid!');
        };
    };

    formatChoice()
    choiceToNum()
    console.log('human chose ' + humanChoiceprompt);
    alert('human chose ' + humanChoiceprompt);
};

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

function computerToString(computerChoice) {
    if (computerChoice == 0) {
        computerString = 'Rock';
    } else if (computerChoice == 1){
        computerString = 'Paper';
    }else {
        computerString = 'Scissors';
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

function displayScore(computerScore, humanScore) {
    console.log('Human score is ' + humanScore);
    console.log('Computer score is ' + computerScore);  
};

function gameWinner() {
    if (humanScore == 5 || humanScore > computerScore) {
        console.log('========🏆=🏆=🏆==========')
        console.log('HUMAN WON THE GAME!')
        alert('HUMAN WINS 🏆=🏆=🏆')
        console.log('========🏆=🏆=🏆==========')
    } else if (computerScore == 5 || computerScore > humanScore) {
        console.log('========🏆=🏆=🏆==========')
        console.log('COMPUTER WON THE GAME!')
        alert('COMPUTER WINS 🏆=🏆=🏆')
        console.log('========🏆=🏆=🏆==========')
    }
};  

function mainGame() {
    console.log('==============ROUND=============')
    getHumanChoice();
    getComputerChoice();
    
    computerToString(computerChoice);
    playerToString(humanChoice);
    console.log('------CHOICE-------')
    playRound(computerChoice, humanChoice);
    console.log('------SCORES-------')
    displayScore(computerScore, humanScore);

};


function playGame() {
    
    for (i = 0; i < roundsTotal;){
        mainGame();
        i++;
        
    };

    gameWinner();
    
};

playGame();

 
