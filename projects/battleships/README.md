# battleship-game-repo

![Design preview for the Space tourism website coding challenge](./assets/preview.jpg)

## Welcome! 👋
## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## My process

### Built with

- OOP
- Asynchronous JavaScript

### What I learned

1) the way to present ships in the game within OOP

```js
let model = {
  
  ships = [
    { locations: ["", "", ""], hits: ["", "", ""] },
    { locations: ["", "", ""], hits: ["", "", ""] },
    
  ],
  
};
```

2) .indexOf() method returns an index of its value in the brackets. Used to find index inside both arrays and strings
```js
// I check if the locations array has a sought element and if it does the method returns its index. 
// Otherwise it returns -1. The index variable keeps the result.
let index = ship.locations.indexOf(guess);
```

3) string.charAt(index) method returns a character of a string, located on the specified index
```js
// I use it to get letter out of the user's input and turn it into a number later on 
let firstChar = guess.charAt(0);
```
4) the isNaN() function determines whether a value is NaN (not a number) or not
```js
// I use it to check whether a user's guess follows the demands,
// i.e. if any value is not a number, the warning appears
if ( isNaN(row) || isNaN(column) ) {
   alert("Oops, that is not on the board");
}

```

5) making chosen functions load in advance
```js
window.onload = init;
```

6) using .click() method to add keyboard functionality to a button
```js
// used this method to invoke a function via keyboard event
// the function is initially listens to mouse clicks
function init() {
(...)
   const guessInput = document.querySelector('#guessInput');
   guessInput.onkeyup = handleKeyPress;
}

function handleKeyPress(e) {
   let fireButton = document.getElementById('fireButton');
   if(e.key === 'Enter') {
      fireButton.click();
      return false;
   }
}

```

### Continued development

* figure out why this key word does not work with arrow functions in such kind of a case
```js
let view = {
   showMessage: (msg) => {
      document.querySelector('#messageArea').innerHTML = msg;
   },
   showHit: (location) => {
      document.getElementById(location).setAttribute('class', 'hit');
      this.showMessage("HIT!");
   },
   showMiss: (location) => {
      document.getElementById(location).setAttribute('class', 'miss');
      this.showMessage("You missed.");
   }
};
```
* figure out why this piece of code does not process the numeric input properly, so I need to use what I eventually use
```js
function parseGuess(guess) {
   let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
   const firstLetter = guess.charAt(0);
   const row = alphabet.indexOf(firstLetter);
   const col = guess.charAt(1);

   if (guess === null || guess.length !== 2) {
      alert("Oops, enter a letter and a number on the board");
   } else if (isNaN(row) || isNaN(col)) {
      alert("Oops, that's not on the board");
   } else if (row < 0 || row >= model.boardSize 
              || col < 0 || col >= model.boardSize ) {
      alert("Oops, that's off the board");
   } else {
      return row + col;
   }
   return null;
}
```


*Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Grid Attack](https://codingfantasy.com) - This helped me practice CSS GRID. Challenging and interactive game aimed at learning the css grid properties' application.

- [Git + GitHub](https://www.youtube.com/watch?v=RGOj5yH7evk) - the basic git commands (Youtube).
- [The Markdown Guide](https://www.markdownguide.org/) - for more help with writing markdown (Article).

## Author

- Github - [DannyLenk](https://github.com/DannyLenk)
- Frontend Mentor - [@DannyLenk](https://www.frontendmentor.io/profile/DannyLenk)
- Facebook - [Valerii Danylenko](https://www.facebook.com/valerii.danylenko)
- LinkedIn - [Valerii Danylenko](https://www.linkedin.com/in/valerii-danylenko-74379212b)
- insta - [valeriidanylenko](https://www.instagram.com/valeriidanylenko/?hl=ru)

## Acknowledgments

Thank you, Kevin Powell. Hats off to you and your clear English.
