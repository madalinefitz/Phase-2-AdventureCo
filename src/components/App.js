
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Reviews from "./Reviews";
import NavBar from "./NavBar"
import Destinations from "./Destinations"

function App(){
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/reviews">
          <Reviews />
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


Hey this is Cat!