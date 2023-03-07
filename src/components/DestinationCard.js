import { Image } from 'semantic-ui-react';
import { useState } from 'react'

const Front = ({country, image}) => {
    return (
        <div>
            <Image size='large' circular src={image} alt={country}/>
        </div>
    )
}

const Back=({country, capital, food})=>{
    return (
        <div>
            <h1>{country}</h1>
            <h2>{capital}</h2>
            <h2>{food}</h2>
        </div>
    )
}


function DestinationCard({country, capital, food, image}){
    const [showPhoto, setShowPhoto] = useState(true)
    const togglePhoto = () => {
        setShowPhoto(showPhoto => !showPhoto)
    }
    
 
    return(
        <div onClick={togglePhoto}>
            {showPhoto ? 
            <Front country={country} image={image}/> : 
            <Back country={country} food={food} capital={capital}/>}
        </div>
    )
}

export default DestinationCard; 