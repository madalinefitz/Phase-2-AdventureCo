
import { Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Home from "./Home";
import TellUsYourStories from "./TellUsYourStories";
import NavBar from "./NavBar";
import Destinations from "./Destinations";
import StoryCard from "./StoryCard";



function App(){
  const [stories, setStories] = useState([]);
   
  useEffect(() => {
      fetch("http://localhost:3001/stories")
      .then(r => r.json())
      .then(data => setStories(data))   
  }, [])

  const storyComponent = stories.map (story => {
      return <StoryCard key={story.id} {...story} />
      })
  
  const handleNewStories =( newStory) => {
    setStories([...stories, newStory])
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/story-form">
          <TellUsYourStories handleNewStories={handleNewStories} />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/stories">
          <h1>Travel Stories</h1>
          {storyComponent}
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

