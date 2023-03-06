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
                to="/reviews"
                exact
            >
                Reviews
            </NavLink>
        </div>

    )
}

export default NavBar;