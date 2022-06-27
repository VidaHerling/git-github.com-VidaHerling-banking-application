import React from "react";
import { 
  Button, 
  Card 
} from "react-bootstrap";

export default function Home() {
    return (
      <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src={require("../images/bank_img.jpeg")} alt="homepage image"/>
      <Card.Body>
        <Card.Title>Welcome to Steadfast Bank!</Card.Title>
        <Card.Text>
          Steadfast means faithful and determine. Your financial wellbeing is our enduring mission!
        </Card.Text>
        <Button variant="success" href="/CreateAccount/">Create an account</Button>
      </Card.Body>
    </Card> 
    ); 
}