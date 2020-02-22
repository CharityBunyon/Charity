import utilities from '../../helpers/utilities';
import './projectDisplay.scss';
import projectData from '../../helpers/data/projectData';
import projects from '../projects/projects';


const buildProjects = () => {
  projectData.getProjects()
    .then((project) => {
      let domString = '<div class=""><h4 class="projectTitle">Projects</h4></div>';
      project.forEach((board) => {
        domString += projects.buildProjectCard(board);
      });
      utilities.printToDom('projects', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildProjects };
