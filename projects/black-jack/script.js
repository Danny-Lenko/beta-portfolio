"use strict";

const cardsEl = document.querySelector('#cards-el');
let firstCard;
let secondCard;
let sum;

document.querySelector('#start-btn').addEventListener('click', startNewGame);
document.querySelector('#new-card-btn').addEventListener('click', getNewCard);

function startNewGame() {
   getFirstCards();
   cardsEl.innerHTML = `Cards: ${firstCard}, ${secondCard}`;
   sum = firstCard + secondCard;
   renderSum();
   showMessage();
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

function getFirstCards() { 
   firstCard = getRandom();
   secondCard = getRandom();
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
   const messageEl = document.querySelector('#message-el');
   if (sum < 21) {
      messageEl.innerHTML = "Feel like a new card?"
   } else if (sum > 21) {
      messageEl.innerHTML = "You're out of the game"
   } else {
      messageEl.innerHTML = "You've got Blackjack!"
   }
}