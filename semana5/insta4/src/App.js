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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post2
        nomeUsuario={'Pablo Loredo'}
        fotoUsuario={'https://i.imgur.com/UhVmqjC.png'}
        fotoPost={'https://i.imgur.com/UhVmqjC.png'}
        />
        <Post3
        nomeUsuario={'Pablo Loredo'}
        fotoUsuario={'https://i.imgur.com/UhVmqjC.png'}
        fotoPost={'https://i.imgur.com/UhVmqjC.png'}
        />
      </MainContainer>
    );
  }
}

export default App;
