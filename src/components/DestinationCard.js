import {  Image } from 'semantic-ui-react';
import { useState } from 'react'
import styles from "./mystyle.module.css";

const Front = ({country, image}) => {
    return (
        <div>
            <Image className={styles.cardImage} size='large' circular src={image} alt={country}/>
        </div>
    )
}

const Back=({country, capital, quote, backImage})=>{
    return (
        <div >
            <Image size='medium' circular src={backImage} alt={country} centered/>
            <div className={styles.one}><h2>{country}</h2></div>
            <div className={styles.two}><h3>{capital}</h3></div>
            <div className={styles.three}><h4>{quote}</h4></div>
        </div>
    )
};


function DestinationCard({country, capital, quote, image, backImage}){
    const [showPhoto, setShowPhoto] = useState(true)
    const togglePhoto = () => {
        setShowPhoto(showPhoto => !showPhoto)
    }


    return(
        <div onClick={togglePhoto} >
            {showPhoto ?
            <Front country={country} image={image}/> :
            <Back country={country} quote={quote} capital={capital} backImage={backImage}/>}
        </div>
    )
}

export default DestinationCard;
