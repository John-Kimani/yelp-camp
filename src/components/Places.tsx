import React from "react";
import { Card, Button } from "react-bootstrap";

export interface IPlacesComponent {
  imageUrl: string;
  name: string;
  description: string
}

const PlacesComponent: React.FC<IPlacesComponent> = (props) => {
  return (
    <section className="places-cards">
      <Card className="place-card">
        <Card.Img src={props.imageUrl} alt={props.name} />
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
          <p>{props.description}</p>
          <Button variant="outline-dark"> View Campground </Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default PlacesComponent;
