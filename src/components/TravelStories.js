import StoryCard from "./StoryCard"
import styles from "./mystyle.module.css";
import { useState } from 'react';

function TravelStories({stories}) {
    
    const [filterCountry, setFilterCountry]= useState('')
    const handleFilter = (e) => {
        setFilterCountry(e.target.value)
    }

    const filterStories = stories.filter(story => {
        if (story.country.includes(filterCountry)) {
        return true
        } else {
        if (filterCountry === "Filter by Country") {
        return true
        }
        }
    })

    const storyComponent = filterStories.map (story => {
        return <StoryCard key={story.id} {...story} />
        })

    return (
        <div>
            <div className={styles.userStories}>
                <h1 className={styles.headerStories}>Travel Stories</h1>
                <select onChange={handleFilter} className={styles.select}>
                    <option>Filter by Country</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>Portugal</option>
                    <option>Spain</option>
                    <option>England</option>
                    <option>Switzerland</option>
                    <option>Greece</option>
                    <option>Croatia</option>
                </select>
            </div>
            <div className={styles.scroller}>
            {storyComponent}
            </div>
    </div>
    )
}

export default TravelStories