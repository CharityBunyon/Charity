import 'bootstrap';
import '../styles/main.scss';
import navBar from './components/navbar/navbar';
import carousel from './components/carousel/carousel';
import about from './components/about/about';
import skills from './components/skills/skills';
import title from './components/projectTitle/projectTitle';
import projectDisplay from './components/projectDisplay/projectDisplay';


const init = () => {
  navBar.buildNav();
  carousel.buildCarousel();
  about.buildAbout();
  skills.buildSkillSection();
  title.buildTitle();
  projectDisplay.buildProjects();
};

init();
