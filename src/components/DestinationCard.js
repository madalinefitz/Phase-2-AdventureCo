import { Card, Image } from 'semantic-ui-react';
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
        <Card centered style={{width: '100%'}}>
        <Card.Content>
            <Card.Header>{country}</Card.Header>
            <Card.Meta>{capital}</Card.Meta>
            <Card.Description>{food}</Card.Description>
        </Card.Content>
        </Card>
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