import axios from "axios";
import React,{useState} from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import useForm from "../../hooks/useForm";

const MainContainer = styled.div`
  height: 100vh;
  background-color: #12110d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5c0382;
  label{
      color: whitesmoke;
  }
`;

const ItensContainer =styled.div`
  border:shadow;
  background-color: #1c1c1b;
  display: flex;
  align-items: center;
  width: 75vh;
  height: 80vh;
  padding: 30vh;
  border-radius: 17px;
  flex-direction: column;
`;

const FormsContainer =styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const InputStyle = styled.input`
background-color: #525150;
color: white;
width: 50vh;
border-radius: 5px;
`;
const StyledButtons = styled.button`
--c:  black;
    color: var(--c);
    font-size: 12px;
    border: 0.3em solid var(--c);
    border-radius: 0.5em;
    width: 15em;
    height: 10em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0.2em;
    text-align: center;
    z-index: 1;
    transition: 0.3s;
    background-color: #5c0382;
    cursor: pointer;
    padding: 2px;
    margin-top: 8px;


    :hover{
      background-color:black ;
      color: whitesmoke;
    }
`;


export const LoginPage = () => {
     const {form,onChange} = useForm({email:"",password:""})

    const history = useHistory()
    const backToHomePage =()=>{
        history.push("/")
    }

    //const body ={
    //    email:email,
    //    password:password
    //}
    const loginEvent = (event) => {
        event.preventDefault();
        alert("Formulário enviado!", form);
      };
      

      const loginApi = ()=>{
          axios.post()
      }


    return(
        <div>
            <MainContainer>
                <form onSubmit={loginEvent}>
                <ItensContainer>
                        <h1>Login</h1>
                <FormsContainer>
                        <label>Email</label>
                        <InputStyle type="email" placeholder="Email" required name="email" value={form.email} onChange={onChange}></InputStyle>
                </FormsContainer>
                    <FormsContainer>
                        <label for="senha">Senha</label>
                        <InputStyle type="password" placeholder="Senha" required name="password" value={form.password} onChange={onChange}></InputStyle>
                    </FormsContainer>
                    <StyledButtons>Login</StyledButtons>
                    <StyledButtons onClick={backToHomePage}>Voltar</StyledButtons>
                </ItensContainer>
                </form>
            </MainContainer>
        </div>
    )
}