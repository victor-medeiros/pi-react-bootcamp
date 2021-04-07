import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import NavBar from "./components/NavBar";
import "../src/assets/css/style.css";
import "../src/assets/css/reset.css";
import HomePage from './components/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);
