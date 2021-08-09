import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom";

const MainContainer =styled.div`
display: flex;
flex-direction:column;
font-family: "Roboto",sans-serif;
`;

const Container1 =styled.section`
display: flex;
background-color: aliceblue;
height: 100vh;
background-image: url("https://media.giphy.com/media/WUyQbeKHhpaHrrKJu6/giphy.gif");
filter: blur(8px);
  -webkit-filter: blur(4px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;



const BlurText=styled.div`
  color: white;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
  font-size: 1.5rem;
  flex-wrap:wrap;
`;

const StyledButtons = styled.button`
--c:  white;
    color: var(--c);
    font-size: 16px;
    border: 0.3em solid var(--c);
    border-radius: 0.5em;
    width: 12em;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 3em;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    margin: 1em;
    background-color: transparent;
    cursor: pointer;


    :hover{
      background-color:black ;
      color: whitesmoke;
    }
`;


export const HomePage =()=>{
    const history = useHistory()
    const goToLoginPage = ()=>{
      history.push("/Login")
    }
    const goToTripsPage = ()=>{
      history.push("/Trips")
    }
    return(
        <div>
        <MainContainer>
            <Container1>
            </Container1>
            <BlurText>
                <h1>LabeX</h1>
                <p>Onde o céu não é o limite</p>
                <StyledButtons onClick={goToTripsPage}>Viagens</StyledButtons>
                <StyledButtons onClick={goToLoginPage}>Login</StyledButtons>
            </BlurText>
        </MainContainer>
        </div>
    )
}