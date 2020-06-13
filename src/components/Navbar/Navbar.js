import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <ul className="topnav">
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/news" activeClassName="active">News</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            <li className="right"><NavLink to="/login" activeClassName="active">Login</NavLink></li>
            <li className="right"><NavLink to="/register" activeClassName="active">Register</NavLink></li>
        </ul>
    )
}

export default Navbar;
