"use strict"

document.querySelector('#showAllBtn').addEventListener('click', showAllContent);

function showAllContent() {
   document.querySelector(".hidden1").removeAttribute("hidden");
}