
import {AppBar} from "./components/AppBar/AppBar"
import {MatchesPage} from "./components/MatchesPage/MatchesPage"
import { ResetButton } from './components/ResetButton/ResetButon';
import { Main } from './components/main/main';
import styled from "styled-components"


const MainContainer = styled.div`
border-radius: 2px;
margin: 30px;
border: 1px solid black;
width:400px;
height: 600px;
`;

const App=() => {
  
  return (
    <div>
    <MainContainer>
    <AppBar/>
      <Main/>
      <MatchesPage/>
      <ResetButton/>
    </MainContainer>
    </div>
  );
}

export default App;
