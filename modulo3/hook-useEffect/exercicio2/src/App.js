
import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./styles.css";

function App() {
  const [personagens, setPersonagens] = useState([]);
  const [pegarPersonagem, setPegarPersonagem] = useState("");
  const [dataDeNascimento, setDataDeNascimento] = useState("");

  const selecaoPersonagem = (event) => {
    setPegarPersonagem(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/?page=1")
      .then((response) => {
        console.log(response.data.results);
        setPersonagens(response.data.results);
      })
      .catch(() => {
        console.log("problema na requisição.");
      });
  }, []);

  useEffect(() => {
    if (pegarPersonagem !== "") {
      axios
        .get(`https://swapi.py4e.com/api/people/${Number(pegarPersonagem) + 1}`)
        .then((response) => {
          console.log(response.data);
          setDataDeNascimento(response.data.birth_year);
        })
        .catch(() => {
          console.log("problema na requisição.");
        });
    }
  }, [pegarPersonagem]);

  return (
    <div className="App">
      <select onChange={selecaoPersonagem}>
        <option value="">nenhuma</option>
        {personagens.map((personagem, indice) => {
          return (
            <option value={indice} key={indice}>
              {personagem.name}
            </option>
          );
        })}
      </select>
      <h1>{dataDeNascimento}</h1>
    </div>
  );
}
export default App