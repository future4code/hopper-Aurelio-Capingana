import React from "react";
import Criar from "./componets/Criar";
import Lista from "./componets/Lista";

class labefy extends React.Component{

  state = {
    tela : "principal"
  }

  mudarDeTela = () => {
    this.setState({
      tela : this.state.tela === "principal" ? "palylist" : "princiapl"
    })
  }

  render(){

    return(

      <div>
          {
            this.state.tela === "principal" ? <Criar/> : <Lista/>
          }
      </div>

    )
  }

}
export default labefy
