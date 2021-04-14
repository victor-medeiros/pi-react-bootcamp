import React from 'react';

function CardFilme({titulo, genero, anoLancamento}) {
  return (
    <div class="filme">
      <div class="poster">
        <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/2/21/Clueless.jpg/200px-Clueless.jpg"
            alt="Cena do filme" />
      </div>

      <div class="dados">
        <p class="titulo">{titulo}</p>
        <p class="genero">{genero}</p>
        <p class="ano-lancamento">{anoLancamento}</p>
      </div>
    </div>
  );
}

export default CardFilme;