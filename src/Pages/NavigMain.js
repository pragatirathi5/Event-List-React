import React from "react";
import Img from "../Data/Img.jpg";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Login from "./Login";
import "./NavigMain.css";

const NavigMain= (userDetails) => {

    const user = userDetails.user;

    const logout= () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/logout`,
            "_self"
        );
    };

    return(
  <>

  <Navbar bg="light" expand="sm" style={{width:1370}}>
    <Container style={{marginLeft: 20}}>
    <Navbar.Brand to="/Home">
    <img src={Img} style={{width:50, height: 50}} />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" style={{paddingLeft: 5}}>
    <LinkContainer to="/Login">
        <Nav.Link>Login with Different Account</Nav.Link>
    </LinkContainer>
    <NavDropdown title="More Options" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.2">Support</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Language</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
    </NavDropdown>
    </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
</>
)}

export default NavigMain;