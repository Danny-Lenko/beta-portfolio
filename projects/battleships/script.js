"use strict"

let view = {
   displayMessage: function(msg) {
      document.querySelector('#messageArea').innerHTML = msg;
   },
   displayHit: function(location) {
      document.getElementById(location).setAttribute('class', 'hit');
      this.displayMessage("HIT!");
   },
   displayMiss: function(location) {
      document.getElementById(location).setAttribute('class', 'miss');
      this.displayMessage("You missed");
   }
};

let model = {
   boardSize: 7,
   shipSize: 3,
   shipsNum: 3,
   shipsSunk: 0,
   ships: [
      { locations: ['00', '01', '02'], hits: ['', '', ''] },
      { locations: ['20', '21', '22'], hits: ['', '', ''] },
      { locations: ['10', '11', '12'], hits: ['', '', ''] }
   ],

   fire: function(guess) {
      for (let i = 0; i < this.shipsNum; i++) {
         let ship = this.ships[i];
         let index = ship.locations.indexOf(guess);
         if (index >= 0) {
            ship.hits[index] = 'hit';
            view.displayHit(guess);
            this.isSunk(ship);
            return true;
         }
      }
      view.displayMiss(guess);
      return false;
   },

   isSunk: function(ship) {
      for (let i = 0; i < this.shipSize; i++) {
         if (ship.hits[i] !== 'hit') {
            return false;
         }
      }
      this.shipsSunk++;
      view.displayMessage('You sank my battleship!');
      return true;
   }
};

let controller = {
   guesses: 0,

   processGuess: function(guess) {
      let location = parseGuess(guess);
      if (location) {
         this.guesses++;
         model.fire(location);
      }
   }
};

function parseGuess(guess) {
   let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

   if (guess === null || guess.length !== 2) {
      alert("Oops, enter a letter and a number on the board");
   } else {
      let firstLetter = guess.charAt(0);
      let row = alphabet.indexOf(firstLetter);
      let col = guess.charAt(1);

      if (isNaN(row) || isNaN(col)) {
         alert("Oops, that's not on the board");
      } else if (row < 0 || row >= model.boardSize 
              || col < 0 || col >= model.boardSize) {
         alert("Oops, that's off the board");
      } else {
         return row + col;
      }
   }
   return null;
}

