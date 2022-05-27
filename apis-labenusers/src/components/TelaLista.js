import React from "react"
import axios from "axios"

class TelaLista extends React.Component{

    state = {
        usuarios: []
    }

    componentDidMount(){
        this.pegarUsuario()
    }

    pegarUsuario=() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers:{
                Authorization: "Aurelio-capingana-hopper"
            }
        })

        .then((res) => {
            // console.log(res.data)
            this.setState({ usuarios: res.data})
        })

        .catch((err) => {
            console.log(err.response)
        })

    }

    deletarUsuario = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.delete(url, {
            headers:{
                Authorization: "Aurelio-capingana-hopper"
            }
        })
        .then (() =>{
           alert("Usuário apagado com sucesso")
           this.pegarUsuario() 
        })
        .catch(() => {
            alert("[ERRO] tente novamente")
        })
    }

    render(){
        return(
            <>
               <button onClick={this.props.filhoDois}>Trocar de Tela</button>

               <hr/>
               <h2>Tela de lista</h2>

               {
                   this.state.usuarios.map((usuario) => {
                       return(
                           <ul>
                               <li>{ usuario.name } <button onClick={() => this.deletarUsuario(usuario.id)} >Deletar</button></li>
                               {/* <button onClick={() => this.deletarUsuario(usuario.id)} >Deletar</button> */}
                           </ul>
                       )
                   })
               }

            </>
        )
    }
}
export default TelaLista