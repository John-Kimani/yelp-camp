import React from "react";
import { Card, Button } from "react-bootstrap";

export interface IPlacesComponent {}

const PlacesComponent: React.FC<IPlacesComponent> = () => {
  return (
    <section className="places-cards">
      <Card className="place-card">
        {/* <Card.Img>
            <img src='../assets/images/Buloy Springs.jpg' />
        </Card.Img> */}
        <Card.Body>
        <Card.Title>Mount Ulap</Card.Title>
          <p>One of the most famous hikes in Benguet in Mt Ulap in Itogon.</p>
          <Button variant="outline-dark"> View Campground </Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default PlacesComponent;
