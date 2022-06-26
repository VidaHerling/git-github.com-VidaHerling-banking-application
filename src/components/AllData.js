import React from 'react';
import { Table } from "react-bootstrap";
import {userContext} from "./userContext";

export default function AllData() {
  const user = React.useContext(userContext);
  return (
    <>
    <h1>All Data:</h1>
    {JSON.stringify(user)};
    </>
    // <Table striped bordered hover>
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>Name</th>
    //       <th>Email</th>
    //       <th>Password</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>1</td>
    //       <td>Mark</td>
    //       <td>Otto</td>
    //       <td>@mdo</td>
    //     </tr>
    //     <tr>
    //       <td>2</td>
    //       <td>Jacob</td>
    //       <td>Thornton</td>
    //       <td>@fat</td>
    //     </tr>
    //     <tr>
    //       <td>3</td>
    //       <td colSpan={2}>Larry the Bird</td>
    //       <td>@twitter</td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
};