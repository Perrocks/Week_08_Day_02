import React from "react";
import { Link, useNavigate } from "react-router-dom";


const NavBar = () => {

return (
    <ul className="nav-bar">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/pricing">Pricing</Link>
        </li>
        <li>
            <Link to="/findUs">Find Us</Link>
        </li>
        <li>
            
        </li>
    </ul>
);
}

export default NavBar;