import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/AllData";
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/CreateAccount" element={<CreateAccount/>} />
          <Route path="/deposit" element={<Deposit/>} />
          <Route path="/withdraw" element={<Withdraw/>} />
          <Route path="/alldata" element={<AllData/>} />
        </Routes>
    </div>
  );
};