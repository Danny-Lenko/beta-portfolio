"use strict";

const cardsEl = document.querySelector('#cards-el');
const startBtn = document.querySelector('#start-btn');
const saveBtn = document.querySelector('#save-btn');
const messageEl = document.querySelector('#message-el');
const playerEl = document.querySelector('#player-el');

let sum;
let roundNumber = 1;
let totalScore = 0;

startBtn.addEventListener('click', startNewGame);
saveBtn.addEventListener('click', renderResults);
document.querySelector('#new-card-btn').addEventListener('click', getNewCard);

function startNewGame() {
   let firstCard = getRandom();
   let secondCard = getRandom();
   cardsEl.innerHTML = `Cards: ${firstCard}, ${secondCard}`;
   sum = firstCard + secondCard;
   renderSum();
   showMessage();

   toggleBtns(startBtn, saveBtn);
   if (roundNumber === 1) {
      playerEl.innerHTML = "Player:";
   }
}

function getNewCard() {
   if (sum < 21) {
      let newCard = getRandom();
      cardsEl.innerHTML += `, ${newCard}`;
      sum += newCard;
      renderSum();
      showMessage();   
   }
}

function getRandom() {
   let randomCard = Math.floor(Math.random() * 13 + 1);
   if (randomCard > 10) {
      randomCard = 10;
   } else if (randomCard === 1) {
      randomCard = 11;
   }
   return randomCard;
}

function renderSum() {
   const sumEl = document.querySelector('#sum-el');
   sumEl.innerHTML = `Sum: ${sum}`; 
}

function showMessage() {
   if (sum < 21) {
      messageEl.innerHTML = "Feel like a new card?"
   } else if (sum > 21) {
      messageEl.innerHTML = "You're out of the game"
   } else {
      messageEl.innerHTML = "You've got Blackjack!"
   }
}

function renderResults() {
   toggleBtns(saveBtn, startBtn);
   playerEl.innerHTML += ` ${getResults()}`;
   showRoundNumber();
}

function getResults() {
   let playerResult = 0;
   if (sum === 21) {
      playerResult = 31;
      totalScore += 31;
   } else if (sum > 21) {
      playerResult = 0;
      totalScore += 0;
   } else {
      playerResult = sum;
      totalScore += sum;
   }
   return playerResult;
}

function toggleBtns(none, block) {
   none.style.display = "none";
   block.style.display = "block";
}

function showRoundNumber() {
   roundNumber++;
   messageEl.innerHTML = `Player, start round ${roundNumber}`;
   if (roundNumber > 3) {
      messageEl.innerHTML = `Player, start a new game`;
      playerEl.innerHTML = `Player's total score is ${totalScore}`;
      totalScore = 0;
      roundNumber = 1;
   }
}