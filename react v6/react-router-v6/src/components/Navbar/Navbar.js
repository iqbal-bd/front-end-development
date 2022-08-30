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
                <li><NavLink style = {({isActive}) => {return { color:  isActive ? 'blue': ""}}} to="/about">about</NavLink></li>
                <li><NavLink style = { ({isActive}) => {return {color:  isActive ? 'blue': ''}}} to="/contact">contact</NavLink></li>
                <li><NavLink style = { ({isActive}) => {return {color:  isActive ? 'blue': ''}}} to="/product/mobile">product</NavLink></li>
                <li><NavLink style = { ({isActive}) => {return {color:  isActive ? 'blue': ''}}} to="/product/mobile/10000 taka">product price</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;