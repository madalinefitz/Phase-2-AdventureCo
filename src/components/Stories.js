import React, {useState, useEffect} from "react";
import StoryCard from "./StoryCard";
import { Button, Form, Message, Dropdown } from 'semantic-ui-react'

function Stories(){
    const [ name, setName] = useState("")
    const [ country, setCountry] = useState("")
    const [ story, setStory] = useState("")
    const [ rating, setRating] = useState("")

    const [ stories, setStories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/stories")
        .then(r => r.json())
        .then(data => setStories(data))   
    }, [])
    
    const storyComponent = stories.map (story => {
        return <StoryCard key={story.id} {...story} />
        })

    const handleNameChange = (e) => setName(e.target.value)
    const handleCountryChange = (e) => setCountry(e.target.value)
    const handleCommentChange = (e) => setStory(e.target.value)
    const handleRatingChange = (e) => setRating(e.target.value)


    const handleSubmit = (e) => {
        e.preventDefault()

        const newStory = {
            name: name,
            country: country,
            story: story,
            rating: rating,
        }
    
        fetch("http://localhost:3001/reviews", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newStory),
        })
            .then((r) => r.json())
            .then((data) => {
                setStories([...stories, data])
                setName("")
                setCountry("")
                setStory("")
                setRating("")
        })
    }


    return (
        <div>
            <h1>Travel Stories</h1>
            <Form success onSubmit={handleSubmit} className="">Tell Us What You Think!
                <Form.Input
                    label="Name"
                    placeholder="Enter Your Name..."
                    value={name}
                    onChange={handleNameChange}
                
                />
                <Form.Field
                    control='select'
                    label="Country you visited"
                    value={country}
                    onChange={handleCountryChange}
                >
                        <option value="">Select Your Country</option>   
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Portugal">Protugal</option>
                        <option value="Spain">Spain</option>
                        <option value="Italy">Italy</option>

                </Form.Field>
                <Form.Input
                    label="Review"
                    placeholder="Enter review..."
                    value={story}
                    onChange={handleCommentChange}
            
                />
                <Form.Field
                    control='select'
                    label="Rating"
                    value={rating}
                    onChange={handleRatingChange}
                >
                        <option value="">Rate your trip!</option>   
                        <option value="⭐"> ⭐</option>
                        <option value="⭐⭐"> ⭐⭐</option>
                        <option value="⭐⭐⭐"> ⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐"> ⭐⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐⭐"> ⭐⭐⭐⭐⭐</option>

                </Form.Field>
                <Message
                    success
                    header='Story Submitted'
                    content="Thank you for submitting your travel story!"
                />
                <Button>Submit</Button>
            </Form>
      
            {storyComponent}

        </div>
    );
}

export default Stories;