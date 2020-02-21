import utilities from '../../helpers/utilities';
import './projectDisplay.scss';
import projectData from '../../helpers/data/projectData';
import projects from '../projects/projects';


const buildProjects = () => {
  projectData.getProjects()
    .then((project) => {
      let domString = '<div class="wrapper"><h4 class="skillsTitle">Projects</h4></div>';
      project.forEach((board) => {
        domString += '<div class="container-fluid">';
        domString += projects.buildProjectCard(board);
      });
      utilities.printToDom('projects', domString);
      domString += '</div>';
    })
    .catch((error) => console.error(error));
};

export default { buildProjects };