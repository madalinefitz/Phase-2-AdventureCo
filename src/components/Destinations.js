import DestinationCard from "./DestinationCard.js";
import {useState, useEffect} from "react";
import { Input, Grid, Header } from 'semantic-ui-react'


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
            <Grid centered >
                <Grid.Row relaxed="very" columns={3}>
                    <DestinationCard key={country.id} {...country}/>
                </Grid.Row>
            </Grid>
        )
    })


    return (
        <div>
            <Input icon='search' placeholder="Where to...?" onChange={handleSearch} contentAlign="right"/>
            <Header textAlign="center" as="h1">Destinations</Header>
            {destinationComponent}
        </div>
    )
    }

export default Destinations;