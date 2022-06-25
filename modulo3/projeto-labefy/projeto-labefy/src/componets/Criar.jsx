import axios from "axios";
import React from "react";

class Criar extends React.Component{

    state = {
        nome: ""
    }

    nomePlayList = (e) => {
        this.setState({nome : e.target.value})
    }

    criarPlayList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const body = {
            "name": this.state.nome
        }

        axios.post(url, body, {
           headers:{
               Authorization: "Aurelio-capingana-hopper"
           }
        }) 
        .then(() => {
            alert(" 👍 PlayList criando com Sucesso" )
        })
        .catch(() => {
            alert("👎 [ERRO] Tente mais tarde")
        })
        .finally(() => {
           this.setState({nome : ""}) 
        })
    }

    render(){
        return(
            <>
               <h1>Criar PlayList</h1>

               <div className="criacao">

               <input placeholder="cria sua playList" value={this.state.nome} onChange={this.nomePlayList} />

               <button onClick={this.criarPlayList}> Cria PlayList </button>

               </div>


            </>
        )
    }
}
export default Criar