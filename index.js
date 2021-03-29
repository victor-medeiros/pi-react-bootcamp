const container = document.getElementById("app");

function Contador(props) {
  const [numero, setNumero] = React.useState(0);
  
  function somar() {
    setNumero(numero + 1);
    console.log("Número incrementado. Agora o valor é " + numero);
  }
  
  function subtrair() {
    if (numero - 1 >= 0) {
      setNumero(numero - 1);
      console.log("Número dencrementado. Agora o valor é " + numero);
    }
  }

  return (
    <div className="content">
      <h1>{props.titulo}</h1>
      <h2>{numero}</h2>
      <div>
        <button className="increase" onClick={somar}>+</button>
        <button className="decrease" onClick={subtrair}>-</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <React.Fragment>
      <Contador titulo="Netflix" />
      <Contador titulo="Prime Video" />
      <Contador titulo="Disney+" />
    </React.Fragment>
  );
}

ReactDOM.render(React.createElement(App, null, null), container);