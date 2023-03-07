import React, {useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";
import { Button, Form, Message } from 'semantic-ui-react'

function Reviews (){
    const [ name, setName] = useState("")
    const [ comment, setComment] = useState("")
    const [ rating, setRating] = useState("")

    const [ reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/reviews")
        .then(r => r.json())
        .then(data => setReviews(data))   
    }, [])
    
    const reviewComponent = reviews.map (review => {
        return <ReviewCard key={review.id} {...review} />
        })

    const handleNameChange = (e) => setName(e.target.value)
    const handleCommentChange = (e) => setComment(e.target.value)
    const handleRatingChange = (e) => setRating(e.target.value)


    const handleSubmit = (e) => {
        e.preventDefault()

        const newReview = {
            name: name,
            comment: comment,
            rating: rating,
        }
    
        fetch("http://localhost:3001/reviews", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newReview),
        })
            .then((r) => r.json())
            .then((data) => {
                setReviews([...reviews, data])
                setName("")
                setComment("")
                setRating("")
        })
    }


    return (
        <div>
            <h1>Reviews</h1>
            <Form success onSubmit={handleSubmit} className="">Tell Us What You Think!
                <Form.Input
                    label="Name"
                    placeholder="Enter Your Name..."
                    value={name}
                    onChange={handleNameChange}
                
                />
                <Form.Input
                    label="Review"
                    placeholder="Enter review..."
                    value={comment}
                    onChange={handleCommentChange}
            
                />
                <Form.Field
                    control='select'
                    label="Review"
                    value={rating}
                    onChange={handleRatingChange}
                >
                        <option value="">Select a rating</option>   
                        <option value="⭐"> ⭐</option>
                        <option value="⭐⭐"> ⭐⭐</option>
                        <option value="⭐⭐⭐"> ⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐"> ⭐⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐⭐"> ⭐⭐⭐⭐⭐</option>

                </Form.Field>
                <Message
                    success
                    header='Review Completed'
                    content="Thank you for your input!"
                />
                <Button>Submit</Button>
            </Form>
      
            {reviewComponent}

        </div>
    );
}

export default Reviews;