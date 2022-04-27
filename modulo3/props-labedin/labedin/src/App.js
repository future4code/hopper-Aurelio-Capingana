import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="Aurelio.png" 
          nome="Aurélio Capingana" 
          descricao="Olá, me chamem de Aurélio Capingana. Sou Angolano de 29 anos de idade,alunos da Labenu. Adoro escrever poesias, jogar video Games e programar, na sexta-feira procuro no final do dia relaxar vendo uma serie e repor as energias perdidas."
        />
        
        <ImagemButton 
          imagem="seta-para-baixo.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container-small">
        <CardPequeno 
          imagem="celular.png" 
          nome="Telefone:" 
          descricao="(35) 99856-0346"
        />
      </div>

      <div className="page-section-container-small">
        <CardPequeno 
          imagem="email.png" 
          nome="Email:" 
          descricao="aurelio,capingana01@gmail.com"
        />
      </div>

      <div className="page-section-container-small">
        <CardPequeno 
          imagem="endereco.png" 
          nome="Endereço:" 
          descricao="Rua Greci Lautert Prates, 191 Caxias do Sul - RS"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="job.png" 
          nome="Coop Agro Nova Aliança" 
          descricao="A cinco meses trabalho na cooperativa agroindustrial Nova Aliança como operador de maquina!" 
        />
        
        <CardGrande 
          imagem="job.png" 
          nome="Educação" 
          descricao="Trabalhei por dois anos como professor na escola primaria Marria Mazarello, bem como na escola Dom Bosco." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
