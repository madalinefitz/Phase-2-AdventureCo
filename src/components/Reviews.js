import React, {useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";

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
            <form onSubmit={handleSubmit} className="">
                <h3>Tell Us What You Think!</h3>
                <input
                    type="text"
                    label="Name"
                    placeholder="Enter Your Name..."
                    value={name}
                    onChange={handleNameChange}
                
                />
                <br />
                <input
                    type="text"
                    placeholder="Enter review..."
                    value={comment}
                    onChange={handleCommentChange}
            
                />
                <br />
                <select
                    value={rating}
                    onChange={handleRatingChange}
                >
                        <option value="">Select a rating</option>   
                        <option value="⭐"> ⭐</option>
                        <option value="⭐⭐"> ⭐⭐</option>
                        <option value="⭐⭐⭐"> ⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐"> ⭐⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐⭐"> ⭐⭐⭐⭐⭐</option>
                        
                </select>
                <br />
                <input
                    type="submit"
                    value="Submit Review"
                />
            </form>
      
            {reviewComponent}

        </div>
    );
}

export default Reviews;