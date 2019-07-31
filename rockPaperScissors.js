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




let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, compSelection) {
    let possibleGame = [["rock","rock"],["rock","paper"],["rock","scissors"],["paper","paper"],["paper","rock"],["paper","scissors"],["scissors","scissors"],["scissors","rock"],["scissors","paper"]];
    let currentGame = [playerSelection, compSelection];
    let tempArr = [];

    let compResult = computerPlay();
    let caseResult = prompt("Choose your weapon: rock, paper or scissors");
    let humanResult = caseResult.toLowerCase();
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
                compScore++;
            //if current game matches element at 2, 4 or 8 of possibleGame array, the game is a draw.
            } else {
                console.log(currentGame[0] + " beats " + currentGame[1] + ", you win!");
                humanScore++;
            }
        }
    }

function game(){
    let gameCount = 0;
    while (gameCount <= 5) {

        playRound(humanResult,compResult);
        
    }
    if(compScore > playerScore){
        console.log("The machines have won, score: \n Computer: " + compScore + "\nYou: " + playerScore  );
    } else {
        console.log("Humankind has prevailed, score : \n You: " + playerScore + "\nComputer: " + compScore );
    }
}

game();

   /* let result;
    if(playerSelection == 'rock' && compSelection == 'rock'){
        result = "Draw, play again";
    } else if (playerSelection == 'rock' && compSelection == 'paper') {
        result = "Paper beats rock, you lose";
        
    } else if (playerSelection == 'rock' && compSelection == 'scissors') {
        result = "Rock beats scissors, you win";
        
    } else if (playerSelection == 'paper' && compSelection == 'paper') {
        result = "Draw, play again";
        
    } else if (playerSelection == 'paper' && compSelection == 'rock') {
        result = "Paper beats rock, you win";
        
    } else if (playerSelection == 'paper' && compSelection == 'scissors') {
        result = "Scissors beats paper, you lose";
        
    } else if (playerSelection == 'scissors' && compSelection == 'scissors') {
        result = "Draw, play again";
        
    } else if (playerSelection == 'scissors' && compSelection == 'paper') {
        result = "Scissors beats paper, you win";
        
    } else if (playerSelection == 'scissors' && compSelection == 'rock') {
        result = "Rock beats scissors, you losr";
    }
    console.log(result);
    */
}


