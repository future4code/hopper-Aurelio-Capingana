import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function  Astromatch() {
  const [tela, setTela] = useState("decidir")
  const [perfil, setPerfil] = useState({})

  useEffect (() =>{
    personagens()
  },[])

  const personagens = () =>{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"

      axios
           .get(url)   
           .then((res) => setPerfil(res.data.perfil))
           .catch((err) => alert(err))
  }

  const match = (cond, perf) =>{
     const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person"

     const headers = {
      headers:{
        "Content-Type" : "application/json"
      }
     }

     const body ={
      "id" : `${perf.id}`
      "choice" : cond
     }
  }


  return (
    <div className="App">
      
    </div>
  );
}

export default  Astromatch;
