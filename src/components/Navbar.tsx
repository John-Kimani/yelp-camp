import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export interface INavbarComponent {}

const NavbarComponent = () => {
  return (
    <Navbar variant='light'>
      <Navbar.Brand>
        {/* <img
          src="../assets/yelpCamp-logo.png"
          className="d-inline-block align-top"
          width="30"
          height="30"
          alt="logo"
        /> */}
        YelpCamp
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="home" >Home</Nav.Link>
        </Nav>

        <Nav className="ms-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
