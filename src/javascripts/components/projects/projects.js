import './projects.scss';


const buildProjectCard = (projects) => {
  let domString = '';
  domString += `
  <div class="card text-center projectCard" style="width: 30rem;">
  <div>
  <a href="${projects.url}"><img src="${projects.projectImg}" alt="${projects.title}" class="card-img-top icons"></a>
  </div>
  <div class="card-body">
    <p class="card-title projectTitle">${projects.title.toUpperCase()}</p>  
  </div>
  <div class="overlay">
    <p class="projectInfo">${projects.description}</p> 
    <a href="${projects.url}" class="projectInfo viewProject">View Project</a>
    <a href="${projects.github}" class="projectInfo viewGit">View Github</a>  
  </div>
</div>
      `;
  return domString;
};
export default { buildProjectCard };
