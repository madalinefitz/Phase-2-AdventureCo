

function DestinationCard({country, capital, food, image}){

 
    return(
        <div>
            <h1>{country}</h1>
            <h2>{capital}</h2>
            <h2>{food}</h2>
            <img src={image} alt={country}/>
        </div>
    )
}

export default DestinationCard; 