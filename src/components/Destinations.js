import DestinationCard from "./DestinationCard.js";
import {useState, useEffect} from "react";
import { Grid, Input } from 'semantic-ui-react'
import styles from "./mystyle.module.css";


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
            <Input className={styles.search} size="big" icon="search" placeholder="Where to?" onChange={handleSearch}/>
            <h1 className={styles.destHeader}>Destinations in Europe</h1>
            <Grid centered padded columns={3}>
            {destinationComponent}
            </Grid>
        </div>
        
       
    )
    }

export default Destinations;