let humanThrow = 0;


function getComputerChoice() {
    const computedNumber = Math.floor(Math.random() * 3);
    if (computedNumber == 0) {
        console.log('Computer Throws Rock');
    } else if (computedNumber == 1) {
        console.log('Computer Throws Paper');
    } else {
        console.log('Computer Throws Scissors');
    };
};



function getHumanChoice() {
    let humanChoice = prompt('Rock Paper or Scissors?');
    
    function formatChoice() {
        humanChoice = humanChoice.toLowerCase().trim();       
    };
    function choiceToNum() {
        if (humanChoice == 'rock') {
            humanThrow = 1;
            console.log(humanThrow);
        } else if( humanChoice == 'paper'){
            humanThrow = 2;
            console.log(humanThrow);
        } else if (humanChoice == 'scissors') {
            humanThrow = 3;
            console.log(humanThrow);
        } else {
            console.log('not valid!');
        }
    };
    

    formatChoice();
    choiceToNum();
    console.log(humanChoice);
}


getHumanChoice();
getComputerChoice();