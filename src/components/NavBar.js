import { NavLink } from "react-router-dom";

function NavBar(){

    return (
        <div>
            <NavLink
                to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink
                to="/destinations"
                exact
            >
                Destinations
            </NavLink>
            <NavLink
                to="/travel-stories"
                exact
            >
                Travel Stories
            </NavLink>
        
        </div>

    )
}

export default NavBar;