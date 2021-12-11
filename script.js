"use strict"

document.querySelector('#showAllBtn').addEventListener('click', showAllContent);

function showAllContent() {
   let hiddenList = document.getElementsByClassName('hidden1');
   for (let i = 0; i < hiddenList.length; i++) {
      let hiddenElement = hiddenList[i];
      hiddenElement.removeAttribute('hidden');
   }
}