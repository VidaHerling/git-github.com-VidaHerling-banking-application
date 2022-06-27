import React from 'react';
import { Card, Button, Form } from "react-bootstrap";
import {userContext} from './userContext';

export default function CreateAccount() {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState("");
  const [name, setName]         = React.useState("");
  const [email, setEmail]       = React.useState("");
  const [password, setPassword] = React.useState("");
  let users = React.useContext(userContext);

  const handleCreate = () => {
    users.push({name, email, password});
    setShow(false);
    alert(`Your account is successfully created!`);
 }

 console.log(users);
  
  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  //the create account button is disabled if the form is imcomplete (password must be at least 8 characters long)
  const buttonDisabled = () => {
    if(!name || !email || password.length < 8) return true;
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
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
          </Form>
          <Button variant="success" onClick={handleCreate} disabled={buttonDisabled()}>Create Account</Button>
          {status}
        </Card.Body>) : 
        (<Button variant="primary" onClick={clearForm}>Create Another Account</Button>)
        }
    </Card>
  )
};