import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar/";
import Credits from "./components/Credits";

import routes from "./routes";

function App() {
    return (
        <div className="App">
            <Sidebar routes={routes}>
                <img src={logo} className="App-logo" alt="logo" />
                <Credits />
            </Sidebar>

            <Switch>
                {routes.map((route) => {
                    return <Route {...route} />;
                })}
            </Switch>
        </div>
    );
}

export default App;
