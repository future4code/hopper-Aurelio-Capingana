
import React, { useState, useEffect } from "react";
import PokeCard from "./components/PokeCard";
import axios from "axios";
import "./styles.css";

function App () {
    // lista de pokemons que está sendo guardada no estado

    // nome do pokemon guardado no estado, assim que o usuário
    // escolhe um nome no dropdown

   const [pokeList, setPokeList] = useState([])
   const [pokeName, setPokeName] = useState("")

   useEffect(() =>{
     axios
          .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
          .then(response =>{
            setPokeList(response.data.results)
          })
          .catch(err =>{
            console.log(err)
            // alert("Erro", err)
          })
   }, [])

  // método que roda após a montagem do componente

    // função axios que está batendo na API e buscando 151 pokemons
    
   // função que está setando no estado os 151 pokemons
      
  const changePokeName = e => {
    setPokeName(e.target.value);
  };

  return (

    <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>

  )
  
}

export default App;

