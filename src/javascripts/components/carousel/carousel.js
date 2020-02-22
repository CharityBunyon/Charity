import './carousel.scss';
import utilities from '../../helpers/utilities';

import create from '../../../images/Create.png';
// import fad from '../../../images/Fad.png';
import pardon from '../../../images/Pardon.png';
import sandwich from '../../../images/Sandwich.png';
// import solar from '../../../images/Solar.png';


const buildCarousel = () => {
  const domString = `
      <div id="carouselExampleIndicators" class="carousel slide data-ride="carousel" id="mainCaro">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100 caroImages" src=${create}>
            <div class="carousel-caption d-none d-md-block projectDeets">
            <p class="projectTitles">Create Beauty</p>
            <a class="projectLink" href="https://create-beauty.firebaseapp.com/auth">View Project</a>
            </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 caroImages" src=${pardon}>
          <div class="carousel-caption d-none d-md-block projectDeets">
            <p class="pardonTitles">Pardon Us</p>
            <a class="projectLink" href="https://pardon-us.firebaseapp.com/">View Project</a>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 caroImages" src=${sandwich}>
          <div class="carousel-caption d-none d-md-block projectDeets">
            <p class="sandTitles">Hit the Spot</p>
            <a class="projectLink" href="https://sandwich-maker-a04f9.firebaseapp.com/">View Project</a>
          </div>
        </div>
        
      </div>
      <a class="carousel-control-prev previousBtn" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next nextBtn" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  `;
  utilities.printToDom('carousel', domString);
};

export default { buildCarousel };
