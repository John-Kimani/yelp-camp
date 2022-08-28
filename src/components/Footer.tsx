import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./css/styles.css"

export interface IFooterComponent {}

const FooterComponent: React.FC<IFooterComponent> = () => {
  return (
    <Navbar>
      <Navbar.Brand className='brand-name'>
        {/* <img
          src="../assets/yelpCamp-logo.png"
          className="d-inline-block align-top"
          width="30"
          height="30"
          alt="logo"
        /> */}
        YelpCamp
      </Navbar.Brand>
    </Navbar>
  );
};

export default FooterComponent;
