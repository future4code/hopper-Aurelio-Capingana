import React from "react";
import axios from "axios";

class TelaCadastro extends React.Component{

    state ={
        nome: "",
        email: ""
    }

    olharParaNome = (e) =>{
        this.setState({nome: e.target.value})
    }

    olharParaEmail = (e) =>{
        this.setState({email: e.target.value})
    }

    cadastrarUsuario = () =>{
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const body ={
            "name": this.state.nome,
            "email": this.state.email
        }
        

        axios.post(url, body,{
            headers:{
                Authorization: "Aurelio-capingana-hopper"
            }
        })
        .then(()=>{
            alert("Usuário cadastrado com sucesso")
        })

        .catch(()=>{
            alert("[ERRO] Faça uma verificação")
        })

        .finally(()=>{
            this.setState({nome:"", email:""})
        })
    }
    
    render(){
        return(
            <>

               <button onClick={this.props.filhoUm}>Trocar de tela</button>
               <hr/>
               
               <h2>Tela de Cadastro</h2>

               <input placeholder="nome" value={this.state.nome} onChange={this.olharParaNome} />

               <input placeholder="email" value={this.state.email} onChange={this.olharParaEmail} />

               <button onClick={this.cadastrarUsuario}>Cadastrar</button>

            </>
        )
    }
}

export default TelaCadastro