import React, { useEffect, useState } from "react";
import api from "./config/configApi"


function App(){

  const [nome, setnome] = useState("")
  const [resultado, setResultado] = useState([])

  useEffect(() => {
    handloCreatePlayList()
  }, [])

  const handloInputValue = (e) =>{
    setnome(e.target.value)
  }

  const handloCreatePlayList = async () =>{
    const body = {
      name : nome
    }
    try{
      await api.post("/", body)
      alert("criada com sucesso")
    }
    catch(error){
      if(error.response.data.message){
        return alert(error.response.data.message)
      }
      }
      finally{
        setnome("")
      }
      
    }

    const handloGetAllPlayList = async () => {
      try{
        const response = await api.get("/")
        setResultado(response.data.result.list)
      }
      catch(error){

      }
    }

    const handloDeletePalyList = async(id) => {
      try{
        await api.delete(`/${id}`)
        alert("Deletado com sucesso")
  
      }
      catch(error){

      }
    }
  
  return(
    <>
       <input placeholder="nome playlist" value={nome} onChange={handloInputValue} />
       <button>Enviar</button>

       {resultado.map(() => {
         return(
           <div key={result.id}>
             <p>{result.name}</p>
             <button onClick={} >Deletar</button>
           </div>
         )
       })}
    </>
  )
}
export default App
