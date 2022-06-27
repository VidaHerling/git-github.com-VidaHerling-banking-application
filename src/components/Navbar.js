import React from 'react';
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import "./components.css";

export default function NavBar() {  
  const [hover, setHover] = React.useState(false);

  const onHover = () => {
    setHover(true);
  }

  const onLeave = () => {
    setHover(false);
  }

  const services = ['Create Account', 'Deposit', 'Withdraw', 'All Data'];

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-primary bg-light">
      <img src={require("../images/heart_logo.png")} className="logo"/>
      <Link className="navbar-brand" to="/">Steadfast Bank</Link>
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
                <Link className="nav-link" to={service.replace(/\s+/g, '')} onMouseEnter={onHover} onMouseLeave={onLeave}>
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