import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0)

  const renderizarValor = () => {
    setContador(contador + 1)
    setContador(contador - 1)
  }

  // useEffect sem arry

  /*useEffect(() => {
    console.log("log")
  })
  */

  //useEffect com array vazio
  /*useEffect(() => {

  }, [] )
  */

  //useEffect com arry com argumento
  useEffect(() => {

  },[contador] )

  return (
    <div className="App">
      <h1>Contador</h1>

      <h2> {contador} </h2>
      <button onClick={renderizarValor} >+</button>
      <button onClick={renderizarValor} >-</button>
    </div>
  );
}

export default App;
