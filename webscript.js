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



//Get user's choice for game
function getHumanChoice() {
    let user_choice = "";
    user_choice = prompt("Enter a choice (rock, paper, scissors): ");

    while (user_choice !== "rock" && user_choice !== "paper" && user_choice !== "scissors") {
        user_choice = prompt("Invalid choice. Try again.");
    }

    return user_choice;
}



//gameplay for a single round
function playRound(user_choice, comp_choice) {
    // Case 1: computer wins
    if(user_choice == "rock" && comp_choice == "paper") {
        console.log("You lose! Paper beats rock!");
        comp_score = comp_score + 1;
    }
    else if (user_choice == "paper" && comp_choice == "scissors") {
        console.log("You lose! Scissors cuts paper!");
        comp_score = comp_score + 1;
    }
    else if (user_choice == "scissors" && comp_choice == "rock") {
        console.log("You lose! Rock beats scissors!");
        comp_score = comp_score + 1;
    }
    // Case 2: User wins
    if(user_choice == "paper" && comp_choice == "rock") {
        console.log("You win! Paper beats rock!");
        user_score = user_score + 1;
    }
    else if (user_choice == "scissors" && comp_choice == "paper") {
        console.log("You win! Scissors cuts paper!");
        user_score = user_score + 1;
    }
    else if (user_choice == "rock" && comp_choice == "scissors") {
        console.log("You win! Rock beats scissors!");
        user_score = user_score + 1;
    }
    // Case 3: Draw
    else {
        console.log("Draw! No winner!");
    }
}



let comp_choice = "";   // computer's choice
let user_choice = "";   // user's choice
let comp_score = 0;     // initial computer's score during gameplay
let user_score = 0;     // initial user's score during gameplay

comp_choice = getComputerChoice();
user_choice = getHumanChoice();

playRound(user_choice, comp_choice);
console.log('user score: ${user_score}, computer score: ${comp_score}');