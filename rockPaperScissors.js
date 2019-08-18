const selections = document.querySelectorAll('.selection')
let gameCount = 0;
let playerScore = 0;
let compScore = 0; 
let gameResult = document.getElementById('gameResult');
let totalScore = document.getElementById('totalScore');
let printPlayer = document.getElementById('printPlayer')
let printComp = document.getElementById('printComp')

selections.forEach(selection => {
    selection.addEventListener('click', (e) =>  {
        
        let compChoice = computerPlay();
        playRound(selection.id, compChoice);
        
        printPlayer.innerHTML = playerScore.toString();
        printComp.innerHTML = compScore.toString();

        displayChoices(selection.id, compChoice);
        game(compScore,playerScore);
        totalScore.innerHTML = gameCount.toString() + "/5";
        resetGame(gameCount);
        if(gameCount>=5) gameCount = 0;
        
    });
});


function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * Math.floor(3));
    let result = choices[random];
    return result;
    
}

//compares players and computers selection to determine the winner of that round.
function playRound(playerSelection, compSelection) {

    let possibleGame = [["rock","rock"],["rock","paper"],["rock","scissors"],["paper","paper"],["paper","rock"],
            ["paper","scissors"],["scissors","scissors"],["scissors","rock"],["scissors","paper"]];
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
                
                gameResult.innerHTML = currentGame[0] + " matches " + currentGame[1] + ", Play again";
                console.log(currentGame[0] + " matches " + currentGame[1] + ", Play again");

            //if current game matches element at 1, 5 or 7, wins, increase computer score.
            } else if(tempArr == possibleGame[1] || tempArr == possibleGame[5] || tempArr == possibleGame[7]){
                
                gameResult.innerHTML = currentGame[1] + " beats " + currentGame[0] + ", computer wins!";
                console.log(currentGame[1] + " beats " + currentGame[0] + ", you loose!");
                gameCount++;
                compScore++;
            //if current game matches element at 2, 4 or 8 of possibleGame array, the game is a draw.
            } else {
                
                gameResult.innerHTML = currentGame[0] + " beats " + currentGame[1] + ", you win!";
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
    
    //best out of five or 2 clear points
    if(gameCount == 5){
        if(compScore > playerScore){
            //TODO
            
            gameResult.innerHTML = "The machines have won";
            //console.log("The machines have won, score: \n Computer: " + compScore + "\nYou: " + playerScore  );
        } else if(playerScore > compScore){
            //TODO
            gameResult.innerHTML = "Humankind has prevailed";
            //console.log("Humankind has prevailed, score: \nYou: " + playerScore + "\nComputer: " + compScore );
        }

    }
}

function displayChoices(playerChoice, computerChoice){
    const playerImg = document.getElementById('playerImage');
    const compImg = document.getElementById('computerImage');
    if(playerChoice == "rock"){
        playerImg.setAttribute('src', 'rock.png');
    } else if(playerChoice == 'paper'){
        playerImg.setAttribute('src', 'paper.png');
    } else {
        playerImg.setAttribute('src', 'scissors.png');
    }
    if(computerChoice == 'rock'){
        compImg.setAttribute('src', 'rock.png');
    } else if(computerChoice == 'paper'){
        compImg.setAttribute('src', 'paper.png');
    } else {
        compImg.setAttribute('src', 'scissors.png');
    }
}

function resetGame(gameCount){
    if(gameCount >= 5){
        gameCount = 0;
        playerScore = 0;
        compScore = 0;
        totalScore.innerHTML = gameCount.toString();
        printPlayer.innerHTML = playerScore.toString();
        printComp.innerHTML = compScore.toString();
        return gameCount;
    }
}