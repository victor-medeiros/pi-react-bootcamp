import React from 'react';
import CardFilme from './CardFilme';

function HomePageFilme() {
  return (
    <div className="meus-filmes">
      <div className="container">
        <CardFilme titulo="Clueless" genero="Comédia" anoLancamento="1997" />
        <CardFilme titulo="Clueless" genero="Comédia" anoLancamento="1997" />
        <CardFilme titulo="Clueless" genero="Comédia" anoLancamento="1997" />
      </div>
    </div>
  );
}

export default HomePageFilme;