import { useState } from 'react';
import { NavLink } from "react-router-dom";


    
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue',
    textdecoration: "none",
    textalign: "center"
}

function NavBar(){

    const [route, setRoute] = useState('/')



    return (
        <div class="ui tabular menu">
            <NavLink
                to="/"
                exact
                style={linkStyle}
                class="active item"
                onClick={setRoute('/')}
            >
                Home
            </NavLink>
            <NavLink
                to="/destinations"
                exact
                style={linkStyle}
                class="active item"
                onClick={setRoute('/destinations')}
            >
                Destinations
            </NavLink>
            <NavLink
                to="/travel-stories"
                exact
                style={linkStyle}
                class="active item"
            >
                Travel Stories
            </NavLink>
        
        </div>

    )
}

export default NavBar;