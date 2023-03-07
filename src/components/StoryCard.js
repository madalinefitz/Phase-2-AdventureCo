function StoryCard({name, comment, rating }){

 
    return(
        <div>
            <h1>{name}</h1>
            <h2>{comment}</h2>
            <h2>{rating}</h2>
         
        </div>
    )
}

export default StoryCard;