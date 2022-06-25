import React from 'react';
import { Card, Form, Button } from "react-bootstrap";

export default function Deposit() {
  const [amount, setAmount] = React.useState(0);
  const [balance, setBalance] = React.useState(0);

  // const validateNum = (value) => {
  //   if(value < 0) {
  //     return message = "error";
  //   }
  // }

  const handleDeposit = () => {
    if(+amount > 0) {
      setBalance(+balance + +amount);
      console.log("balance: " + balance + typeof(balance));
      console.log("amount: " + amount + typeof(amount))
    } else return;
  }

  const buttonDisabled = () => {
    if(isNaN(amount) || amount < 0) return true;
    else return false;
  }

  return (
    <>
      <Card style={{ width: '35rem' }}>
        <Card.Header>DEPOSIT</Card.Header>
        <Card.Body>
          <Card.Title>Balance: {balance}</Card.Title>
          <Form.Group className="mb-3" controlId="deposit">
            <Form.Label>Deposit Amount</Form.Label>
            <Form.Control type="text" value={amount} onChange={e => setAmount(e.target.value)} />
            {(isNaN(amount) || amount < 0) && <Form.Text>Error: must be a positive number</Form.Text>} 
          </Form.Group>
          <Button variant="success" onClick={handleDeposit} disabled={buttonDisabled()}>DEPOSIT</Button>
        </Card.Body>
      </Card>
    </>

  )
};