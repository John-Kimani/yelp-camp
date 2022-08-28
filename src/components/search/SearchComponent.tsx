import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Form } from "react-bootstrap";
import "./SearchComponent.css";

const SearchComponent = () => {
  return (
    <section className="hero-section">
      <Card.Body className="right-content">
        <Card.Title>Welcome to YelpCamp</Card.Title>
        <Card.Text>
          View our hand-picked campgrounds from all over <br /> the world, or
          add your own.
        </Card.Text>
        <Form className="search-form">
          <Form.Group className="search-input">
            <Form.Control type="text" placeholder="Search for camps" />
          </Form.Group>
          <Button variant="dark">Search</Button>
        </Form>
        <a className="link">or add your own campground</a>
      </Card.Body>
    </section>

    //   <section>

    //     <h5>Welcome to YelpCamp</h5>
    //     <p>View our hand-picked campgrounds from all over <br /> the world, or add your own.</p>
    //     <div className="input">

    //     </div>
    //   </section>
  );
};

export default SearchComponent;
