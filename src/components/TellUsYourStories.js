import React, {useState} from "react";
import { Button, Form, Message,} from 'semantic-ui-react';
import styles from "./mystyle.module.css"

function TellUsYourStories({handleNewStories}){
    const [ name, setName] = useState("")
    const [ country, setCountry] = useState("")
    const [ story, setStory] = useState("")
    const [ rating, setRating] = useState("")

    const handleNameChange = (e) => setName(e.target.value)
    const handleCountryChange = (e)  => setCountry(e.target.value)
    const handleCommentChange = (e) => setStory(e.target.value)
    const handleRatingChange = (e) => setRating(e.target.value)
    
    const [showMessage, setShowMessage] = useState('')
    const message = () => {
        setShowMessage(<Message success header='Story Submitted' content="Thank you for submitting your travel story!" />)
    } 

    const handleSubmit = (e) => {
        e.preventDefault()

        const newStory = {
            name: name,
            country: country,
            story: story,
            rating: rating,
        }
    
        fetch("http://localhost:3001/stories", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newStory),
        })
            .then((r) => r.json())
            .then((data) => {
                handleNewStories(data)
                setName("")
                setCountry("")
                setStory("")
                setRating("")
                message(showMessage)
        })  
    }


    return (
        <div style={{ maxWidth: "600px", margin: "0 auto"}}>
            <h1 className={styles.headerStories}>Tell Us Your Story</h1>
        
            <Form success onSubmit={handleSubmit} className="" contentAlign="center">
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
                        <option value="Portugal">Portugal</option>
                        <option value="Spain">Spain</option>
                        <option value="Italy">Italy</option>
                        <option value="England">England</option>
                        <option value="SwitzerLand">Switzerland</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Greece">Greece</option>
                      
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
                <Button>Submit</Button>
            </Form>
       
            {showMessage}
        </div>
    );
}

export default TellUsYourStories;