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
   },

   generateShipsLocations: function() {
      let locations;
      for (let i = 0; i < this.shipsNum; i++) {
         do {
            locations = this.generateShip();
         } while(this.collision(locations));
         this.ships[i].locations = locations;
      }
   },

   generateShip: function() {
      let direction = Math.floor(Math.random() * 2);
      let row, col;
      let newShipLocations = [];

      if (direction === 1) {
         row = Math.floor( Math.random() * this.boardSize );
         col = Math.floor( Math.random() * (this.boardSize - this.shipSize) );
      } else {
         row = Math.floor( Math.random() * (this.boardSize - this.shipSize) );
         col = Math.floor( Math.random() * this.boardSize );
      }

      for (let i = 0; i < this.shipSize; i++) {
         if (direction === 1) {
            newShipLocations.push(row + '' + (col + i));
         } else {
            newShipLocations.push((row + i) + '' + col);
         }
      }
      return newShipLocations;
   },

   collision: function(locations) {
      for (let i = 0; i < this.shipsNum; i++) {
         let ship = this.ships[i];
         for (let j = 0; j < locations.length; j++) {
            if (ship.locations.indexOf(locations[j]) >= 0) {
               return true;
            }
         }
      }
      return false;
   }
};

let controller = {
   guesses: 0,

   processGuess: function(guess) {
      let location = parseGuess(guess);
      if (location) {
         this.guesses++;
         model.fire(location);
         if (model.shipsSunk === model.shipsNum) {
            view.displayMessage("You've sunk all my battleships in " + this.guesses + " guesses");
         }
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

function init() {
   document.querySelector('#fireButton').addEventListener('click', handleClick);
   document.querySelector('#guessInput').addEventListener('keyup', handleEnterPress);
   model.generateShipsLocations();
}
window.onload = init;

function handleClick() {
   const guessInput = document.querySelector('#guessInput');
   const inputValue = guessInput.value;
   controller.processGuess(inputValue);
   guessInput.value = '';
}

function handleEnterPress(e) {
   const fireButton = document.querySelector('#fireButton');
   if (e.key === "Enter") {
      fireButton.click();
      return false;   
   }
}
