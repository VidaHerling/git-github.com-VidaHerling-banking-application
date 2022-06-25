import React from 'react';
import { Card, Button, Form } from "react-bootstrap";


export default function CreateAccount() {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState("");
  const [name, setName]         = React.useState("");
  const [email, setEmail]       = React.useState("");
  const [password, setPassword] = React.useState("");
  // const ctx = React.useContext(UserContext);

  function validate(field){
    if(!field){
      setStatus("Error!");
      console.log(`status is ${status}`)
      // setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name, email, password);
    if (!validate(name)) return;
    // if (!validate(email, "email")) return;
    // if (!validate(password, "password")) return;
    // ctx.users.push({name, email, password, balance: 200});
    setShow(false);
    alert(`Your account is successfully created!`);
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
          <Form.Group className="mb-3" controlId="form-password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" laceholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          </Form>
          <Button variant="success" onClick={handleCreate}>Create Account</Button>
        </Card.Body>) : 
        (<Button variant="primary" onClick={clearForm}>Create Another Account</Button>)
        }
    </Card>
  )
};