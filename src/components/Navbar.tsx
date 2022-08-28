import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getAuth, signOut } from 'firebase/auth';

export interface INavbarComponent {}

const NavbarComponent = () => {

    const auth = getAuth()


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
        <Nav className="me-auto" defaultActiveKey="/">
            <Nav.Link href="/" >Home</Nav.Link>
        </Nav>

        <Nav className="ms-auto">
            <Nav.Link href='#'>Profile</Nav.Link>
            <Nav.Item>
            <Nav.Link type='submit' onClick={()=> signOut(auth)}>Logout</Nav.Link>
            </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
