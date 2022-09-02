import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navbar.css";
import { 
    Button,
    Container,
    Form,
    Nav,
    Navbar
 } from 'react-bootstrap';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Employee Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
                    <li><NavLink className="navbar" style = {({isActive}) => {return{color: isActive ? 'blue' : ''}}} to="/home">Home</NavLink></li>
                    <li><NavLink className="navbar"  style = {({isActive}) => {return { color:  isActive ? 'blue': ""}}} to="employee">Employee</NavLink></li>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;