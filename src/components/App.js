
import { Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Home from "./Home";
import TellUsYourStories from "./TellUsYourStories";
import NavBar from "./NavBar";
import Destinations from "./Destinations";
import TravelStories from "./TravelStories";
import styles from "./mystyle.module.css";



function App(){
  const [stories, setStories] = useState([]);
   
  useEffect(() => {
      fetch("http://localhost:3001/stories")
      .then(r => r.json())
      .then(data => setStories(data))   
  }, [])

  
  
  const handleNewStories =( newStory) => {
    setStories([...stories, newStory])
  }



  return (
    <div>
      <NavBar />
      <div className={styles.form}>
        <Switch>
          <Route exact path="/story-form">
            <TellUsYourStories handleNewStories={handleNewStories} />
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route exact path="/stories">
          <TravelStories stories={stories}/>
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

