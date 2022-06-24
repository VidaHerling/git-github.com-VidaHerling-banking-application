import React from 'react';
import { Card, Button, Form } from "react-bootstrap";


export default function CreateAccount() {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState("");
  const [name, setName]         = React.useState("");
  const [email, setEmail]       = React.useState("");
  const [password, setPassword] = React.useState("");
  //const ctx = React.useContext(UserContext);

  function validate(field, lable){
    if(!field){
      setStatus("Error: " + lable);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    //ctx.users.push({name, email, password, balance: 200});
    setShow(false);
    setTimeout(() => alert(`Your account is successfully created!`), 3000);

  }
  
  function clearForm(){
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }


  return (
    <Card style={{ width: '35rem' }}>
      <Card.Header>CREATE ACCOUNT</Card.Header>
      <Card.Body>
        <Card.Text>
          <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} placeholder="Name" onChange={e => setName(e.currentTarget.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          </Form>
        </Card.Text>
        <Button variant="primary" onClick={handleCreate}>Create Account</Button>
      </Card.Body>
    </Card>
  )
  
};