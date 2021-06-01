import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/65779131_2340988606014470_8156260130531311616_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHK-pjOBeqnfqgeVAZYhDcqcWm4PTlqWBBxabg9OWpYEBSApuh0JZwfk2YXYK4PzNcLHpRZGznYOpusRN1yNMlp&_nc_ohc=cdQufm9RXp4AX_BEaYn&_nc_ht=scontent-gig2-1.xx&oh=6f407fb360be49ef403d168451e0ac8e&oe=60DBEF18" 
          nome="Pablo Loredo"
          descricao="Oi, eu sou o Pablo Loredo, sou aluno no curso Dev Web FullStack da Labenu!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
        email="ploredo17@gmail.com"
        endereco="Rio de Janeiro"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante na Labenu" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Aprendo mais a cada dia" 
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
