import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/AllData";
import Banking from "./components/Banking";
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
            <Route path="/Deposit" element={<Deposit/>} />
            <Route path="/Withdraw" element={<Withdraw/>} />
            <Route path="/AllData" element={<AllData/>} />
            <Route path="/Banking" element={<Banking/>} />
          </Routes>
    </div>
  );
};