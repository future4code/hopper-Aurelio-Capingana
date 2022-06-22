/*Para o usuário escolher entre Área Administrativa e Lista de Viagens*/
import React from "react";
import '../Style/HomePage.css'

const HomePage = (props) =>{
    return(
        <div className="header">
            <p className="titulo">{props.titulo}</p>
            <p className="titulo">{props.sub}</p>

            <div className="btn">
                <button>Ver Viagem</button>
                <button>Area Administrativa</button>
            </div>

        </div>
    )
}
export default HomePage