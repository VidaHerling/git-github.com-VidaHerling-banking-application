import React from 'react';
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import "./components.css";

export default function NavBar() {  
  const services = ['Create Account', 'Deposit', 'Withdraw', 'All Data'];

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-primary bg-light">
      <img src={require("../images/heart_logo.png")} className="logo" alt="heart logo"/>
      <Link className="navbar-brand" to="/">Steadfast Bank</Link>
      <Link className="navbar-brand" to="/">Home</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {services.map((service, index) => (
            <li className="nav-item" key={index}>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip>
                    {service}
                  </Tooltip>
                }>
                <Link className="nav-link" to={service.replace(/\s+/g, '')}>
                  {service}
                </Link>
              </OverlayTrigger>
            </li>
          ))
          }
        </ul>
      </div>
    </nav>
    </>
  );
}