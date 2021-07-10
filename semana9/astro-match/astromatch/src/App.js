import React,{useEfect,useState} from "react";
import styled from "styled-components";

const Card = styled.div`
display: flex;
align-items: center;
flex-direction:column;
background-color: black;
color: white;
height: 500px;
width: 68%;
justify-content: center;
margin-top: 20%;
margin-bottom: 20%;
margin-left:15%;
border-radius: 15px;
`;

const ButtonDiv = styled.div `
display: flex;
justify-content: space-around;
color:white;
`;

const CardHeader = styled.div`
display: flex;
color: white;
`;



const App = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          Header
        </CardHeader>
        <p>Hello World</p>
        <ButtonDiv>
          <button></button>
          <button></button>
        </ButtonDiv>
      </Card>
    </div>
  );
}

export default App;
