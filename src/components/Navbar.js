import React from 'react';
import { Link } from "react-router-dom";
import "./components.css";

export default function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={require("../images/heart_logo.png")} className="logo"/>
      <Link className="navbar-brand" to="/">Steadfast Bank</Link>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/CreateAccount/">Create Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/deposit/">Deposit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/withdraw/">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alldata/">AllData</Link>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}