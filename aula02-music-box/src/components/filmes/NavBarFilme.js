import React from 'react';

function NavBarFilme() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo highlight">
          <h1>Meus Filmes Preferidos</h1>
        </div>
        <ul className="navbar">
          <li>Feed</li>
          <li className="highlight">Meus filmes</li>
          <li>Configurações</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarFilme;