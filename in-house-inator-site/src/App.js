import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Router } from "react-router-dom";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar/";
import Credits from "./components/Credits";

function App() {
    return (
        <div className="App">
            <Sidebar>
                <img src={logo} className="App-logo" alt="logo" />
                <Credits />
            </Sidebar>

            <Content />
        </div>
    );
}

export default App;
