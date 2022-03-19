# Small Projects Portfolio

This repository keeps my projects that aren't meant to get into my main portfolio

![Design preview for the Space tourism website coding challenge](./portfolio.png)

## Welcome! 👋
## Table of contents

- [My process](#my-process)
  - [Projects list](#projects-list)
  - [What I learned](#what-i-learned)
      - [APIs Projects](#apis-projects)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## My process

### Projects list

- APIs Projects
- DOM Projects
- Roll dice game
- Note Taker
- Expense Tracker
- To-Do List
- BBQ school registration form
- Blackjack
- Minimalism blog
- Battleships Game
- Responsive UI design
- Memory Game
- Emoji Personality
- Leads Tracker Chrome Extension
- Seeds company landing page
- Cars company survey form


### What I learned

#### APIs Projects

1) GET first 5 blog posts from an API

```js
    fetch('https://apis.scrimba.com/jsonplaceholder/posts')
        .then(response => response.json())
        .then(data => console.log(data.slice(0, 5)))

```

2) POST new data through an API

```js
fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "Buy Milk",
        completed: false
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(data => console.log(data))
```

3) Not triggering a click event when targeting a child element

```scss
   &__dropbtn--arrow,
   &__dropbtn--content {
      pointer-events: none;
   }
```

4) !! ".disabled" class for buttons

```css
.disabled {
    pointer-events: none;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
    /* cursor: not-allowed; */
}
```

5) remove <a> default styling

```css
   a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
  }
```

6) full screen background image

```css
    html { 
        background: url(images/bg.jpg) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
```

7) making text more readable

```css
p {
    /* text-shadow: 1px 1px 2px #474747; */
    text-shadow: 0px 0px 20px #aaaaaa;
}
```

8) taking a small app to the center

```css
body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: red;
    border: 5px solid white; */
}
```

9) turn HTMLCollection into an array

```js
    let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"))
    myPhotoImgs.forEach(photoImg => 
```

10) asign each data piece a unique id while fetching

```js
async function getBooks() {
    let response = await fetch('books.json')
    let books = await response.json()
    let n = 1
    return books.map(book => {
        book.id = n
        n += 1
        return book
    })
}

getBooks().then(books => {
    console.log(books)
})
```

11) similar items display with grid

```css
.portfolio {
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1em;
} 
```



#### The Welcome Page

1) make a hidden attribute work

```css
[hidden] {display: none !important;}
```

#### Blackjack game

1) An easy way to toggle buttons passing arguments

```js
function toggleBtns(none, block) {
   none.style.display = "none";
   block.style.display = "block";
}
```

2) the .flow class to add space on top of children

```html
<div class="flow" style="flex-basis: 100%; --flow-space: 4rem">
</div>
```
```css
.flow > *:not(:first-child) {
  margin-top: var(--flow-space, 1rem);
}
```

#### Emoji Personality
1) an easy method to fetch value from an input field

```js
document.getElementById('textbox_id').value;
// For example
document.getElementById("searchTxt").value;
```



### Continued development

* aria (Accessible Rich Internet Applications);
* CSS custom properties (figure out all the advantages of setting variables);
* vh, vw values and their relevance;
* the clamp() property;
* CSS grid;
* JS - setting local variables;
* the minmax() property;
* the translateX(Y) property;

*Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources
#### APIs Projects
- [String.prototype.padStart()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) - Was inroduced in the ES6 chapter.
- [ES6 classes](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes) - The MDN article about classes.
- [Find Object In Array](https://stackoverflow.com/a/35397839/16906724) - Heplped me deal with finding the eaten ghosts in array of ghosts by the value of its key in Pacman.
- [Form.reset()](https://developer.mozilla.org/ru/docs/Web/API/HTMLFormElement/reset) - method to set,e.g., inputEl.value to "".
- [Copy To Clipboard](https://stackoverflow.com/a/64422721/16906724) - helped me figure out how to copy content onclick for "Colors Generator".
- [Show Time](https://stackoverflow.com/a/30245911/16906724) - article on date and time fetching.

#### From early projects
- [Fetch input field content](https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript) - This article contains more info on methods to fetch value from an input feild.
- [Align vertically (r)](https://ruseller.com/lessons.php?id=1248) - The article gives 6 methods to vertically align with css.

#### Default
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

Thank you, Scrimba and its community. Thank you FreeCodeCamp and its community. Thank you, Front-end mentor and its community.
