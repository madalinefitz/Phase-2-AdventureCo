import DestinationCard from "./DestinationCard.js";
import {useState, useEffect} from "react";



function Destinations () {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/countries")
        .then(r => r.json())
        .then(data => setCountryData(data));
    }, []);
    


    const [searchedString, setSearchedString] = useState("")
    
    const handleSearch = e => setSearchedString(e.target.value)
    
    const searchedCountries = countryData.filter(country => {
        return (country.country.toLowerCase().includes(searchedString.toLowerCase()))
    })

    const destinationComponent = searchedCountries.map (country => {
        return <DestinationCard key={country.id} {...country} 
        />
    })


    return (
        <div>
            <input type="text"
            name="search"
            placeholder="Where to...?"
            className="input-text"
            onChange={handleSearch}>

            </input>
            <h1>Destinations</h1>
            {destinationComponent}
        </div>
    )
    }

export default Destinations;