function getComputerChoice() {
    let num = 0;
    let comp_choice = "";
    num = Math.random();
    
    if(num >=0 && num < 0.33) {
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

let comp_choice = "";
comp_choice = getComputerChoice();

console.log(comp_choice);