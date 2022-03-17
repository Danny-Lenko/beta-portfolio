"use strict"

let value = 6;

const btnHide = document.querySelector('#btnHide');

async function getAllProjects(val) {
   const res = await fetch("data.json");
   const data = await res.json();
   return data.slice(0, val);
}

function getProjectHtml(aProject) {
   return `
      <div class="projects__item">
         <a href="projects/${aProject.address}/index.html" target="blank">
            <div class="projects__img-div">
               <img src="projects/${aProject.address}/portfolio.png" alt="">
            </div>
            <p class="projects__title">
               <span class="code">&lt;</span>
                  ${aProject.name}
               <span class="code">&#47;&gt;</span>
            </p>
         </a>
      </div>
   `
}

function displayProjects(allProjects) {
   console.log(allProjects[0]);
   document.querySelector('#projectsEl').innerHTML = `${allProjects.map(getProjectHtml).join('')}`;
}

getAllProjects(value).then(displayProjects);

document.querySelector('#btnMore').addEventListener('click', () => {
   value += 6;
   getAllProjects(value).then(displayProjects);
   btnHide.style.display = "inline-block";
})

btnHide.addEventListener('click', () => {
   value = 6;
   getAllProjects(value).then(displayProjects);
   btnHide.style.display = "none";
})

// =========================================== header behavior

function fixAndUnfixNavbar() {
   const header = document.querySelector('.header');
   if (window.pageYOffset > 50) {
      header.classList.add('nav-toggle');
   } else if (window.pageYOffset < 50) {
      header.classList.remove('nav-toggle');
   }
}
window.addEventListener('scroll', fixAndUnfixNavbar);





