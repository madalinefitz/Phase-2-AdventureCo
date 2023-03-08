import { NavLink } from "react-router-dom";
import styles from "./mystyle.module.css";


function NavBar(){

    return (
        <div className={styles.NavBar}>
            <NavLink
                to="/"
                exact
                className={styles.link} 
            >
                Home
            </NavLink>
            <NavLink
                to="/destinations"
                exact
                className={styles.link}
            >
                Destinations
            </NavLink>
            <NavLink
                to="/story-form"
                exact
                className={styles.link}
            >
                Tell Us Your Story
            </NavLink>
            <NavLink
                to="/stories"
                exact
                className={styles.link}
            >
                Travel Stories
            </NavLink>
        
        </div>

    )
}

export default NavBar;