import React from 'react';
import { Card, Form, Button } from "react-bootstrap";

export default function Withdraw() {
  const [withdraw, setWithdraw] = React.useState("");
  const [balance, setBalance] = React.useState(500);

  const handleWithdraw = () => {
    if(+withdraw > 0 & balance >= withdraw) {
      setBalance(+balance - +withdraw);
      setTimeout(() => alert(`You have successfully withdrawn $ ${withdraw}.`), 250);
      setWithdraw("");
      console.log("balance: " + balance + typeof(balance));
      console.log("withdraw: " + withdraw + typeof(withdraw))
    } else if(withdraw > balance){
      alert(`Transaction failed. You don't have enough money in your account.`)
      setWithdraw("");
    } else return;
  }

  const buttonDisabled = () => {
    if(isNaN(withdraw) || withdraw < 0) return true;
    else return false;
  }

  return (
    <>
      <Card style={{ width: '35rem' }}>
        <Card.Header>DEPOSIT</Card.Header>
        <Card.Body>
          <Card.Title>Balance: $ {balance}</Card.Title>
          <Form.Group className="mb-3" controlId="withdraw">
            <Form.Label>Amount withdraw</Form.Label>
            <Form.Control type="text" value={withdraw} onChange={e => setWithdraw(e.target.value)} />
            {isNaN(withdraw) && <Form.Text>Error: the amount must be a number</Form.Text>} 
          </Form.Group>
          <Button variant="success" onClick={handleWithdraw} disabled={buttonDisabled()}>DEPOSIT</Button>
        </Card.Body>
      </Card>
    </>

  )
};