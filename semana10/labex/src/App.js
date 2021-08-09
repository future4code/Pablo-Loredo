import React from "react";
import { GlobalStyle } from './styles/globalStyles';
import {HomePage} from './components/Page/HomePage'
import { LoginPage } from "./components/LoginPage/Login";
import {BrowserRouter, Switch,Route} from "react-router-dom"
import { TripsList } from "./components/TripsList/TripsList";
import { ApplyToTrips } from "./ApplyToTrips/ApplyToTrips";
const  App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/Trips">
          <TripsList/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/Login">
          <LoginPage/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/ApplyToTrips">
          <ApplyToTrips/>
        </Route>
      </Switch>
      </BrowserRouter>
      <GlobalStyle/>
    </div>
  );
}

export default App;
