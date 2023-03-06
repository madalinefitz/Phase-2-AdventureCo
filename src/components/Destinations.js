import DestinationCard from "./DestinationCard.js";
import {useState, useEffect} from "react";



function Destinations () {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/countries")
        .then(r => r.json())
        .then(data => setCountryData(data));
        
    }, []);
    
    

    const destinationComponent = countryData.map (country => {
        return <DestinationCard key={country.id} {...country} 
        />
    })



    return (
        <div>
            <h1>Destinations</h1>
            {destinationComponent}
        </div>
    )
    }

export default Destinations;