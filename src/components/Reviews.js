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
        .then(data => setReviews(data));
        
    }, []);
    
    const reviewComponent = reviews.map (review => {
        return <ReviewCard key={review.id} {...review} 
        />
    })


    return (
        <div>
            <h1>Reviews</h1>
            <form onSubmit={null} className="">
        <h3>Tell Us What You Think!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name..."
          className="input-text"
          
        />
        <br />
        <input
          type="text"
          name="Comment"
          placeholder="..."
          className="input-text"
      
        />
        <br />
        <input
          type="text"
          name="Rating"
          placeholder="..."
          className="input-text"
      
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Submit Review"
          className="submit"
        />
      </form>
      {reviewComponent}
        </div>
    )
}

export default Reviews;