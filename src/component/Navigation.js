import React from 'react';
import {NavLink} from "react-router-dom";
import './NavigationStyle.css';
const Navigation = ()=>{
    return(
        <ul id="Nav_menu">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/admin">Login</NavLink></li>
        </ul>
        
    )
};
export default Navigation;