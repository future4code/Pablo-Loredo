import React from 'react'
import {FlexContainer,LoginCard,TextCard,InputDiv,MainContainer,Header} from "../LoginPage/styles/styles"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const SignInPage = () => {
    
    
    return (<div>
        <MainContainer>
            <Header>
                <Button variant="contained" color="primary">Voltar</Button>
            </Header>
        <FlexContainer>
            <TextCard>
                <h1>LabEddit</h1>
                <h2>Cadastre-se e venha explorar este mundo conosco!</h2>
            </TextCard>
            <LoginCard>
                <h1>Cadastre-se</h1>
                <p>Entre para esta enorme comunidade conosco</p>
                <form>
                <InputDiv>
                <TextField id="outlined-basic" label="Nome de Usuário" variant="outlined" type="text" required/>
                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required/>
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required/>
                </InputDiv>
                </form>
                <Button variant="contained" color="primary">Cadastro</Button>
                <p>Já tem uma conta? Faça o Login aqui!</p>
                <Button variant="contained" color="primary">Login</Button>
            </LoginCard>
        </FlexContainer>
        </MainContainer>
    </div>)
}