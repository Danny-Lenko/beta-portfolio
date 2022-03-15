"use strict"

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

getAllProjects(6).then(displayProjects);





