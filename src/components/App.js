
import { Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Home from "./Home";
import TellUsYourStories from "./TellUsYourStories";
import NavBar from "./NavBar";
import Destinations from "./Destinations";
import StoryCard from "./StoryCard";
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

  const [filterCountry, setFilterCountry]= useState('')
  const handleFilter = (e) => {
    setFilterCountry(e.target.value)
  }
  const filterStories = stories.filter(story => {
    if (story.country.includes(filterCountry)) {
      return true
    } else {
    if (filterCountry === "Select Country") {
      return true
    }
    }
  })

  const storyComponent = filterStories.map (story => {
    return <StoryCard key={story.id} {...story} />
    })

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
          <div className={styles.header}>
        <h1>Travel Stories</h1>
          <select onChange={handleFilter}>
            <option>Select Country</option>
            <option>France</option>
            <option>Germany</option>
            <option>Italy</option>
            <option>Portugal</option>
            <option>Spain</option>
          </select>
        </div>
          <div className={styles.scroller}>
          {storyComponent}</div>
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

