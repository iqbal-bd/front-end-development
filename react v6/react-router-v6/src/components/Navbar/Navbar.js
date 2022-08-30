import React from 'react';
import {Link,NavLink} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {


    return (
        <div>
            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul> */}
            <ul className="ul">
                <li><NavLink style = {({isActive}) => {return{color: isActive ? 'blue' : ''}}} to="/">Home</NavLink></li>
                <li><NavLink style = {({isActive}) => {return { color:  isActive ? 'blue': ""}}} to="/about">About</NavLink></li>
                <li><NavLink style = { ({isActive}) => {return {color:  isActive ? 'blue': ''}}} to="/contact">Contact</NavLink></li>
                <li><NavLink style = { ({isActive}) => {return {color:  isActive ? 'blue': ''}}} to="/product/mobile">Product</NavLink></li>
                <li><NavLink style = { ({isActive}) => {return {color:  isActive ? 'blue': ''}}} to="/dashboard">Dashboard</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;