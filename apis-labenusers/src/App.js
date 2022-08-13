import React  from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaLista from "./components/TelaLista";


class App extends React.Component{

  state = {
    telaAtual : "cadastro"
  }

  trocarDeTela = () =>{
    this.setState({
      telaAtual: this.state.telaAtual === "cadastro" 
      ? "lista"
      : "cadastro"
    })
  }

  render() {

    return(
      <div>
        
         {
           this.state.telaAtual === "cadastro" 
           ? <TelaCadastro filhoUm={this.trocarDeTela} /> 
           : <TelaLista filhoDois={this.trocarDeTela} />
         }
         
      </div>
    )
  }
}
export default App