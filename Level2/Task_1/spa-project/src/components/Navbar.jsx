
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav">    
        <h1> Welcome to my Application </h1> </div>

        <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>

        </nav>
    );

}
export default Navbar;