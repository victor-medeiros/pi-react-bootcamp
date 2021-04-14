import React from 'react';

function NavBarFilme() {
  return (
  <nav class="header">
    <div class="container">
      <div class="logo highlight">
        <h1>Meus Filmes Preferidos</h1>
      </div>
      <ul class="navbar">
        <li>Feed</li>
        <li class="highlight">Meus filmes</li>
        <li>Configurações</li>
        <li>Logout</li>
      </ul>
    </div>
  </nav>
);
}

export default NavBarFilme;