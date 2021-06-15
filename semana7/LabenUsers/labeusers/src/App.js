import styled, { ThemeConsumer } from 'styled-components';
import React from 'react';
import './App.css';
import axios from 'axios'

const divCentro = styled.div`
display: flex;
align-items: center;
`;

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
const headers ={
  headers:{
    Authorization:"pablo-loredo-molina"
  }
}
class App extends React.Component {
  state ={
    name:"",
    email:""
  }

  mudaIputNome = (event)=>{
    this.setState({nome:event.target.value})
  }

  listaCadastros =() =>{
    axios
    .get(url,headers)
    .then((res)=>{
      this.setState({nome:res.id.name})
      .catch ((err)=>{
        alert(err.response.data.message)
      })
    })
  }
  
  
  

  
  render(){
    const listaDeNomes = this.state.name.map((nome)=>{
      return <li key={nome.id}>{nome}</li>
    })
    return(<divCentro>
      <h1>Cadastro de Usuarios</h1>
      <h2>Digite seu nome</h2>
      <input type= "text">
      </input>
      <h3>Digite seu email</h3>
      <input type="text"></input>
    </divCentro>)
  }
}

export default App

