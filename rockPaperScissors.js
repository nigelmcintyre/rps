//randomly selects rock, paper or scissors
function computerPlay(){
    let rock = 'rock', paper = 'paper', scissors = 'scissors';
    let result;
    let random = Math.floor(Math.random() * Math.floor(3))+1;
    if(random == 1){
        result = rock;
    } else if(random == 2){
        result = paper;
    } else {
        result = scissors;
    }
    return result;
}

//compares players and computers selection to determine the winner of that round.
function playRound(playerSelection, compSelection) {
    let possibleGame = [["rock","rock"],["rock","paper"],["rock","scissors"],["paper","paper"],["paper","rock"],["paper","scissors"],["scissors","scissors"],["scissors","rock"],["scissors","paper"]];
    let currentGame = [playerSelection, compSelection];
    let tempArr = [];

    //for every possible game scenario
    for(let i = 0; i < possibleGame.length; i++){
        //temporary array to hold each individual game scenario to be compared to the current game.
        tempArr = possibleGame[i];
        //once the loop has gone through possibleGame array and found a match to current game.
        if(currentGame[0] == tempArr[0] && currentGame[1] == tempArr[1]){
            //if current game matches element at 0,3 or 6 of possibleGame array, the game is a draw.
            if(tempArr == possibleGame[0] || tempArr == possibleGame[3] || tempArr == possibleGame[6]){
                console.log(currentGame[0] + " matches " + currentGame[1] + ", Play again");
            //if current game matches element at 1, 5 or 7, wins, increase computer score.
            } else if(tempArr == possibleGame[1] || tempArr == possibleGame[5] || tempArr == possibleGame[7]){
                console.log(currentGame[1] + " beats " + currentGame[0] + ", you loose!");
                gameCount++;
                compScore++;
            //if current game matches element at 2, 4 or 8 of possibleGame array, the game is a draw.
            } else {
                console.log(currentGame[0] + " beats " + currentGame[1] + ", you win!");
                playerScore++;
                gameCount++;
            }
        }
    }
}

//keeps track of points and displays winner either after 5 games or if a player is two clear points ahead.
function game(compScore, playerScore){  

    let compClearPoints = 0;
    let playerClearPoints = 0;
    //checks if a player is two clear points ahead
    if(compScore > playerScore){
       compClearPoints = compScore - playerScore;
    } else {
        playerClearPoints = playerScore - compScore; 
    }
    //best out of five or 2 clear points
    if(gameCount == 5 ){
        if(compScore > playerScore || compClearPoints >= 2 ){
            console.log("The machines have won, score: \n Computer: " + compScore + "\nYou: " + playerScore  );
        } else if(playerScore > compScore || playerClearPoints >=2){
            console.log("Humankind has prevailed, score: \nYou: " + playerScore + "\nComputer: " + compScore );
        }

    }
}
//takes in users selection
function getUserInput(){
    let caseResult = prompt("Choose your weapon: rock, paper or scissors");
    humanResult = caseResult.toLowerCase();
}

let playerScore = 0;
let compScore = 0; 
let gameCount = 0;
let humanResult = "";

while(gameCount<5){

    let compResult = computerPlay();
    //check that user enters valid input
    try {
        getUserInput();
        if(!humanResult == "rock" || !humanResult == "paper" || !humanResult == "scissors" || humanResult == "" ){
            throw error = "Please enter rock, paper or scissors"
        }
        
    } catch (error) {
        console.log(error);
        getUserInput();
    }
    
    playRound(humanResult,compResult);
    game(compScore,playerScore);

}



