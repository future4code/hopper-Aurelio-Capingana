import React from "react";

function CardPequeno(props) {
    return (
        <div className="endereco">
            <img src={ props.imagem } />
            <p>{props.conteudo}</p>
        </div>
    )
}
export default CardPequeno;