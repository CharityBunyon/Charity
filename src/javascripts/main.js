import 'bootstrap';
import '../styles/main.scss';
import navBar from './components/navbar/navbar';
import carousel from './components/carousel/carousel';
import about from './components/about/about';


const init = () => {
  navBar.buildNav();
  carousel.buildCarousel();
  about.buildAbout();
};

init();
