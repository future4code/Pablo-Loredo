import React from 'react';
import styled from 'styled-components';
import {centerDiv,stylesContainer,playlisDiv} from "./styled"
function App() {
  return (
    <div>
     <stylesContainer>
       <playlisDiv>
         <input type="text"></input>
       </playlisDiv>
       <centerDiv><h1>Labefy!</h1></centerDiv>
     </stylesContainer>
    </div>
  );
}

export default App;
