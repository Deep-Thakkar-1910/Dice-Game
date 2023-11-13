// After refactoring but with less functionality.

/* 'use strict';

// Selecting the elements
const dice =  document.querySelector('.dice');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const rollDiceButton = document.querySelector('.btn--roll');
const newGameButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');
let totalScores=[0,0];
const totalScoreDisplayP1  = document.querySelector('#score--0');
const totalScoreDisplayP2  = document.querySelector('#score--1');

// Keeping track of total and current scores,active player and if game is in continuity .
let activePlayer = 0;
let playing = true;

let currentScore = 0;
let totalScoreP1 = 0;
let totalScoreP2 = 0;

// Take Player's names
 
let player0Name =  prompt("Please enter player 1's name");
let player1Name =  prompt("Please enter player 2's name");
if(!player0Name){
    
    player0Name = "PLayer 1"
    
}
if(!player1Name){
    
    player1Name = "PLayer 2"
    
}
const player0NameLength=player0Name.length;
const player1NameLength=player1Name.length;
// update player's names
updatePlayerNames();


// -------------------functions-------------------

// Update playerNames

function updatePlayerNames() {
    document.querySelector('#name--0').textContent=player0Name;
    document.querySelector('#name--1').textContent=player1Name;
}
// Generate random number from one to 6 to simulate a dice roll.
function generateRandomDice(){
    return Math.trunc(Math.random()*6)+1;
}

function switchPlayer(){
    currentScore = 0
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
}
// Roll dice on clicking roll dice button and update dice image accordingly

function rollDice(){
    if(playing){   
    dice.classList.remove("hidden");
    let currentRolledDice = generateRandomDice();
    // Update dice image
    dice.setAttribute("src",  `dice-${currentRolledDice}.png`);
    
    // if rolled dice != 1 then update and add current score else update currentScore to 0 and display accordingly.
    // Toggle active player if rolled dice is 1.

    if(currentRolledDice === 1 ) {
        switchPlayer();
    }else {
        currentScore+=currentRolledDice
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    };
 }
    
}

// Updating the total on hold button press.
// And switch player and reset current score.
function updateTotalScore() {
    
    if(playing){

        totalScores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = totalScores[activePlayer];
        if(totalScores[activePlayer]>=20){
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            dice.classList.add(`hidden`);
            playing = false;
        }else switchPlayer();

    }
}

// Restart the game.

function restartGame() {
    activePlayer=0;
    playing=true;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    currentScore=0;
    document.querySelector('#current--0').textContent=0;
    document.querySelector('#current--1').textContent=0;
    document.querySelector('#score--0').textContent=0;
    document.querySelector('#score--1').textContent=0;
    totalScores=[0,0];
    document.querySelector('#name--0').textContent=player0Name.substring(0,player0NameLength);
    document.querySelector('#name--1').textContent=player1Name.substring(0,player1NameLength);
}
  
// -------implementing functionalities-------

rollDiceButton.addEventListener('click', rollDice);
holdButton.addEventListener('click',updateTotalScore);
newGameButton.addEventListener('click',restartGame);
 */


//-------- My code before refactoring but with more functionality-----

'use strict';

// Selecting the elements
const dice =  document.querySelector('.dice');
let activePlayer = 0;
const player1  = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const rollDiceButton = document.querySelector('.btn--roll');
const newGameButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');
const totalScoreDisplayP1  = document.querySelector('#score--0');
const totalScoreDisplayP2  = document.querySelector('#score--1');
const currentScoreDisplayP1 = document.querySelector('#current--0'); 
const currentScoreDisplayP2 = document.querySelector('#current--1'); 

// Keeping track of total and current scores.
let currentScore = 0;
let totalScoreP1 = 0;
let totalScoreP2 = 0;

// Take Player's names
 
let player1Name =  prompt("Please enter player 1's name");
let player2Name =  prompt("Please enter player 2's name");
if(!player1Name){
    
    player1Name = "PLayer 1"
    
}
if(!player2Name){
    
    player2Name = "PLayer 2"
    
}
// update player's names
document.querySelector('#name--0').textContent=player1Name;
document.querySelector('#name--1').textContent=player2Name;


// -------------------functions-------------------

// Generate random number from one to 6 to simulate a dice roll.
function generateRandomDice(){
    return Math.trunc(Math.random()*6)+1;
}

// Roll dice on clicking roll dice button and update dice image accordingly

function rollDice(){
    dice.classList.remove("hidden");
    let currentRolledDice = generateRandomDice();
    // Update dice image
    dice.setAttribute("src",  `dice-${currentRolledDice}.png`);
    
    // if rolled dice != 1 then update and add current score else update currentScore to 0 and display accordingly.
    // Toggle active player if rolled dice is 1.

    if(currentRolledDice === 1 ) {
        currentScore = 0
        activePlayer = activePlayer===0 ? 1 : 0;
        player1.classList.toggle('player--active');
        player2.classList.toggle('player--active');
    }else currentScore+=currentRolledDice;

    // Display current scores according to active player.
    
    if(player1.classList.contains('player--active')){
        currentScoreDisplayP1.textContent = currentScore;
        currentScoreDisplayP2.textContent = 0;
    }else {
        currentScoreDisplayP2.textContent = currentScore;
        currentScoreDisplayP1.textContent = 0;
    }
    
}

// Updating the total on hold button press.
// And switch player and reset current score.
function updateTotalScore() {
    
    if(player1.classList.contains('player--active') && totalScoreP1<100){
        totalScoreP1 += currentScore;
        totalScoreDisplayP1.textContent = totalScoreP1;
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        currentScoreDisplayP1.textContent = 0;
        currentScore=0;
    }else if(player2.classList.contains('player--active') && totalScoreP2<100){
        totalScoreP2 += currentScore;
        totalScoreDisplayP2.textContent = totalScoreP2;
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
        currentScoreDisplayP2.textContent = 0;
        currentScore=0;
    }

    function winCondition(){
        dice.classList.add("hidden");
        document.querySelector('body').style.backgroundImage="url(green.png)";
        rollDiceButton.removeEventListener('click',rollDice);
        holdButton.removeEventListener('click',updateTotalScore);
    }
    if(totalScoreP1>=20 && totalScoreP2<20 && !player1.classList.contains('player--active')){
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
        player1.classList.add('player--winner');
        document.querySelector('#name--0').textContent=`${player1Name} Wins🥳`;
        winCondition();
        
    }else if(totalScoreP2>=20 && totalScoreP1<20 && !player2.classList.contains('player--active')) {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        player2.classList.add('player--winner');
        document.querySelector('#name--1').textContent=`${player2Name} Wins🥳`;
        winCondition();
    }
}

// Restart the game.

function restartGame() {
    document.querySelector('body').style.backgroundImage ='linear-gradient(to top left, #753682 0%, #bf2e34 100%)';
    activePlayer=0;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    currentScore=0;
    currentScoreDisplayP1.textContent=currentScoreDisplayP2.textContent=0;
    totalScoreP1=totalScoreP2=0;
    totalScoreDisplayP1.textContent=totalScoreDisplayP2.textContent=0;
    dice.classList.add('hidden');
    rollDiceButton.addEventListener('click', rollDice);
    holdButton.addEventListener('click',updateTotalScore);
    document.querySelector('#name--0').textContent=player1Name;
    document.querySelector('#name--1').textContent=player2Name;
    
}
  
// -------implementing functionalities-------

rollDiceButton.addEventListener('click', rollDice);
holdButton.addEventListener('click',updateTotalScore);
newGameButton.addEventListener('click',restartGame);