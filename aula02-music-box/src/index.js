import React from 'react';
import ReactDOM from 'react-dom';
// import "../src/assets/css/style.css";
import "../src/assets/css/style-filme.css";
import FooterFilme from './components/filmes/FooterFilme';
import HomePageFilme from './components/filmes/HomePageFilme';
// import "../src/assets/css/reset.css";
// import Inicial from './pages/inicial';
// import MinhasMusicas from './pages/minhasMusicas';
import NavBarFilme from './components/filmes/NavBarFilme';

ReactDOM.render(
  <React.StrictMode>
    {/* <MinhasMusicas /> */}
    <NavBarFilme />
    <HomePageFilme />
    <FooterFilme />
  </React.StrictMode>,
  document.getElementById('root')
);
