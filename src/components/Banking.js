import React from 'react';
import { Card, Form, Button } from "react-bootstrap";

export default function Banking() {
  const [deposit, setDeposit] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
  const [balance, setBalance] = React.useState(0);

  const handleDeposit = () => {
    if(+deposit > 0) {
      setBalance(+balance + +deposit);
      setTimeout(() => alert(`You have successfully deposited $ ${deposit}!`), 250);
      setDeposit("");
    } else return;
  }

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
    if(isNaN(withdraw) || withdraw < 0 || isNaN(deposit) || deposit < 0) return true;
    else return false;
  }

  return (
    <>
      <h1>Balance: $ {balance}</h1>
      <Card style={{ width: '35rem' }}>
        <Card.Header>Amount Deposit</Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="deposit">
            <Form.Control type="text" value={deposit} onChange={e => setDeposit(e.target.value)} />
            {(isNaN(deposit) || deposit < 0) && <Form.Text>Error: the amount must be a positive number</Form.Text>}
          </Form.Group>
          <Button variant="success" onClick={handleDeposit} disabled={buttonDisabled()}>DEPOSIT</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '35rem' }}>
        <Card.Header>Amount Withdraw</Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="deposit">
          <Form.Control type="text" value={withdraw} onChange={e => setWithdraw(e.target.value)} />
            {isNaN(withdraw) && <Form.Text>Error: the amount must be a number</Form.Text>} 
          </Form.Group>
          <Button variant="success" onClick={handleWithdraw} disabled={buttonDisabled()}>WITHDRAW</Button>
        </Card.Body>
      </Card>
    </>

  )
};