import React, { useReducer } from 'react';
import { Table } from "react-bootstrap";
import {userContext} from "./userContext";

export default function AllData() {
  const users = React.useContext(userContext);
  return (
    <>
      <h1>All Account Data:</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        {users.map((user, index) => {
          return (
            <tbody>
              <tr key={index} borderless = {true} >
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>$ {user.balance}</td>
              </tr>
            </tbody>
          )
        })}
      </Table>
    </>
  )
};