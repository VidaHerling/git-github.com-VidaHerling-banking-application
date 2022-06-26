import React from 'react';
import { Card, Form, Button } from "react-bootstrap";

export default function Deposit() {
  const [deposit, setDeposit] = React.useState("");
  const [balance, setBalance] = React.useState(0);

  const handleDeposit = () => {
    if(+deposit > 0) {
      setBalance(+balance + +deposit);
      setTimeout(() => alert(`You have successfully deposited $ ${deposit}!`), 250);
      setDeposit("");
      console.log("balance: " + balance + typeof(balance));
      console.log("deposit: " + deposit + typeof(deposit))
    } else return;
  }

  const buttonDisabled = () => {
    if(isNaN(deposit) || deposit <= 0) return true;
    else return false;
  }

  return (
    <>
      <Card style={{ width: '35rem' }}>
        <Card.Header>DEPOSIT</Card.Header>
        <Card.Body>
          <Card.Title>Balance: $ {balance}</Card.Title>
          <Form.Group className="mb-3" controlId="deposit">
            <Form.Label>Amount deposit</Form.Label>
            <Form.Control type="text" value={deposit} onChange={e => setDeposit(e.target.value)} />
            {(isNaN(deposit) || deposit < 0) && <Form.Text>Error: the amount must be a positive number</Form.Text>}
          </Form.Group>
          <Button variant="success" onClick={handleDeposit} disabled={buttonDisabled()}>DEPOSIT</Button>
        </Card.Body>
      </Card>
    </>

  )
};