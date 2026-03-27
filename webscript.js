// Get computer's choice for game
function getComputerChoice() {
    let num = 0;
    let comp_choice = "";
    num = Math.random();
    
    if(num >= 0 && num < 0.33) {
        comp_choice = "rock";
    }
    else if(num >= 0.33 && num < 0.66) {
        comp_choice = "paper";
    }
    else {
        comp_choice = "scissors"
    }
    return comp_choice; 
}



function getHumanChoice() {
    let user_choice = "";
    user_choice = prompt("Enter a choice (rock, paper, scissors): ");

    while (user_choice !== "rock" && user_choice !== "paper" && user_choice !== "scissors") {
        user_choice = prompt("Invalid choice. Try again.");
    }

    return user_choice;
}



let comp_choice = "";
let user_choice = "";
comp_choice = getComputerChoice();
user_choice = getHumanChoice();
console.log(user_choice);