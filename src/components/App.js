
import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Stories from "./Stories";
import NavBar from "./NavBar"
import Destinations from "./Destinations"


function App(){
  


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/travel-stories">
          <Stories />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/destinations">
          <Destinations />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

