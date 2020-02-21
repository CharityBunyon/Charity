import 'bootstrap';
import '../styles/main.scss';
import navBar from './components/navbar/navbar';
import carousel from './components/carousel/carousel';
import about from './components/about/about';
import skills from './components/skills/skills';


const init = () => {
  navBar.buildNav();
  carousel.buildCarousel();
  about.buildAbout();
  skills.buildSkillSection();
};

init();
