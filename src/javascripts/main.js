import 'bootstrap';
import '../styles/main.scss';
import navBar from './components/navbar/navbar';
import carousel from './components/carousel/carousel';


const init = () => {
  navBar.buildNav();
  carousel.buildCarousel();
};

init();
