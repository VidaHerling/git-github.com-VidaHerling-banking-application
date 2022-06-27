import React from 'react';
import { Card, Button, Form } from "react-bootstrap";
import {userContext} from './userContext';

export default function CreateAccount() {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState("");
  const [name, setName]         = React.useState("");
  const [email, setEmail]       = React.useState("");
  const [password, setPassword] = React.useState("");
  const [balance, setBalance] = React.useState("");
  let users = React.useContext(userContext);

  const validate = (field, label) => {
    if (!field) {
      setStatus(' Error: ' + label + " can't be blank");
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

  const handleCreate = () => {
    if(!validate(name, "name")) return;
    if(!validate(email, "email")) return;
    if(password.length < 8) {
      setStatus(" Error: password must be at least 8 characters long");
      return status;
    }
    if(balance < 200) {
      setStatus(" Error: you must deposit at least $200 to create an account")
      return status;
    }
    users.push({name, email, password, balance});
    setShow(false);
    alert(`Your account is successfully created!`);
 }
  
  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setBalance("");
    setShow(true);
  }

  //the create account button is disabled if the form is blank
  const buttonDisabled = () => {
    if(!name && !email && !password && !balance) return true;
    else return false;
  }

  return (
    <Card style={{ width: '35rem' }}>
      <Card.Header>CREATE ACCOUNT</Card.Header>
      {show ? 
        (<Card.Body>
          <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label><br/>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="balance">
            <Form.Label>Initial deposit</Form.Label><br/>
            <Form.Text>You must deposit at least $200 to create an account</Form.Text>
            <Form.Control type="number" placeholder="Intial Balance" value={balance} onChange={e => setBalance(e.target.value)}/>
          </Form.Group>
          </Form>
          <Button variant="success" onClick={handleCreate} disabled={buttonDisabled()}>Create Account</Button>
          <div className="error-message">{status}</div>
        </Card.Body>) : 
        (<Button variant="primary" onClick={clearForm}>Create Another Account</Button>)
        }
    </Card>
  )
};