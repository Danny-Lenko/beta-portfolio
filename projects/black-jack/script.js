"use strict";

let sum;
let cards = [];
let newCard;
const startBtn = document.querySelector('#start-btn');
const cardsEl = document.querySelector('#cards-el');
const sumEl = document.querySelector('#sum-el');
const newCardBtn = document.querySelector('#new-card-btn');
const messageEl = document.querySelector('#message-el');

let isAlive = false;
let hasBlackJack;

startBtn.addEventListener('click', function() {
   const firstCard = getRandom();
   const secondCard = getRandom();
   cards = [firstCard, secondCard];
   sum = firstCard + secondCard;
   isAlive = true;
   hasBlackJack = false;

   renderGame();
})

function getRandom() {
   let randomCard = Math.floor(Math.random() * 13) + 1;
   if (randomCard == 1) {
      return 11
   } else if (randomCard > 10) {
      return 10
   } else {
      return randomCard;
   }
}

newCardBtn.addEventListener('click', function() {
   if ( isAlive && !hasBlackJack ) {
      newCard = getRandom();
      cards.push(newCard)
      sum += newCard;
      
      renderGame();
   }
})

function renderGame() {
   let myCards = "";
   for (let i = 0; i < cards.length; i++) {
      myCards += cards[i] + " "; 
   }
   cardsEl.textContent =`Cards: ${myCards}`;

   sumEl.innerHTML = `Sum: ${sum}`;
   
   if (sum < 21) {
      isAlive = true;
      messageEl.innerHTML = "Want to draw a new card?"
   } else if (sum === 21) {
      hasBlackJack = true;
      messageEl.innerHTML = "You've got Blackjack!"
   } else {
      isAlive = false;
      messageEl.innerHTML = "You're out of the game."
   }
}


