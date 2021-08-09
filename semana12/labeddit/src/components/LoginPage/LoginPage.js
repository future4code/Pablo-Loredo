import React from 'react'
import {FlexContainer,LoginCard,TextCard,InputDiv,MainContainer,Header} from "../LoginPage/styles/styles"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const LoginPage = () => {
    
    
    return (<div>
        <MainContainer>
            <Header>
                <Button variant="contained" color="primary">Voltar</Button>
            </Header>
        <FlexContainer>
            <TextCard>
                <h1>LabEddit</h1>
                <h2>Faça Login para ter acesso a 100% da plataforma ou Cadastre-se e entre nesse mundo conosco  !</h2>
            </TextCard>
            <LoginCard>
                <h1>Login</h1>
                <p>Preencha o formulário de Login para continuar</p>
                <form>
                <InputDiv>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                </InputDiv>
                </form>
                <Button variant="contained" color="primary">Login</Button>
                <p>Não tem uma conta? Cadastre-se aqui!</p>
                <Button variant="contained" color="primary">Cadastro</Button>
            </LoginCard>
        </FlexContainer>
        </MainContainer>
    </div>)
}
