import DestinationCard from "./DestinationCard.js";
import {useState, useEffect} from "react";
import { Input, Grid, Header, Search } from 'semantic-ui-react'


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
        return (
            <DestinationCard key={country.id} {...country}/>     
        )
    })

    return (
        <div>
            <Search size= "large" icon='Search' placeholder="Where to...?" onChange={handleSearch}/>
            <Header textAlign="center" as="h1">Destinations</Header>
            <Grid centered padded columns={4}>
            {destinationComponent}
            </Grid>
        </div>
    )
    }

export default Destinations;