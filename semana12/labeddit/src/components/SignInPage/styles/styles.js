import styled from "styled-components"

export const MainContainer = styled.div`
display:flex;
flex-direction: column;
background-color: #42f57e;
`;

export const FlexContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
background-color: #2253e6;
height: 100vh; ;
`
export const LoginCard = styled.div`
height:90vh;
width: 40vw;
background-color: white;
border-radius:19px;
box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
margin-top: 30px;
margin-right: 20px;
display: flex;
align-items: center;
flex-direction: column;

h1{
    margin-top:60px;
    margin-right: 20px;
}

p{
    font-size: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 65px;
}
`
export const TextCard = styled.div`
height:90vh;
width: 60vh;
display: flex;
margin-right:53px;
font-size: 2.2rem;
flex-wrap: wrap;
padding-right:180px;
 
h1{
    margin-bottom: 0px;
}

h2{
    margin-top: 0px;
}
`;

export const InputDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding:5px;
font-size:1.2rem;
`;

export const StyledInput = styled.input`
border-radius: 6px;
width:29vw;
height: 2.5vh;
box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
background-color: #2253e6;
height: 0.01vh;
`;


