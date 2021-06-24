import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from "./components/Post2/post2"
import Post3 from "./components/Post3/post3"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
state = {

  pessoas: [
{
    nomeUsuario:"Pablo",
    fotoUsuario: "o",
    fotoPost:"o"
},
{
  nomeUsuario:"Layane",
  fotoUsuario:"O",
  fotoPost:"O"
},
{
  nomeUsuario:"Dandhara",
  fotoUsuario:"o",
  fotoPost:"o"
}
   ]
 }
}

export default App;
