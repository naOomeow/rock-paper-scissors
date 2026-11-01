
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

getComputerChoice();