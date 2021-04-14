import React from 'react';
import ReactDOM from 'react-dom';
import "../src/assets/css/style.css";
import "../src/assets/css/style-filme.css";
import "../src/assets/css/reset.css";
import Inicial from './pages/inicial';
import MinhasMusicas from './pages/minhasMusicas';
import NavBarFilme from './components/filmes/NavBarFilme';

/* <MinhasMusicas /> */
ReactDOM.render(
  <React.StrictMode>
    <NavBarFilme />
  </React.StrictMode>,
  document.getElementById('root')
);
