'use strict';

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add("hidden")

const switchPlayer = function(){
    activePlayer = 1 - activePlayer;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    currentScore = 0;
}
btnRoll.addEventListener("click", function(){
    if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }
    else{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        switchPlayer();
    }
}
})

btnHold.addEventListener("click", function(){
    if(playing){
    scores[activePlayer] += currentScore; 
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if (scores[activePlayer] >= 10){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        diceEl.classList.add("hidden");
    }
    else{  
        switchPlayer();
    }
}
})

btnNew.addEventListener("click", function(){
    playing = true;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    document.querySelector(`.player--0`).classList.add("player--active");
    document.querySelector(`.player--1`).classList.remove("player--active");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    diceEl.classList.add("hidden");
    activePlayer = 0;
    scores[0] = 0;
    scores[1] = 0;
})
