import './navbar.scss';
import utilities from '../../helpers/utilities';

import logo from '../../../images/CBLOGO.png';

const buildNav = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light mainNav">
  <a class="navbar-brand" href="#">
  <img src=${logo} class="navImage">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 mainLinks container  justify-content-end">
      <li class="nav-item">
        <a class="nav-link" id="individualLink" href="#">About</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" id="individualLink" href="#">Skills</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="individualLink" href="#">Projects</a>
      </li>
    <li class="nav-item">
      <a class="nav-link" id="individualLink" href="#">Contact</a>
    </li>
  </div>
</nav>
  `;
  utilities.printToDom('nav', domString);
};

export default { buildNav };