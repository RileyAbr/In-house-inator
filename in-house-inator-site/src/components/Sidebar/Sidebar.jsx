import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";

import { Heading, VStack } from "@chakra-ui/core";

import Credits from "../Credits";

function Sidebar(props) {
    return (
        <VStack as="nav" height="100%">
            <img
                width="50px"
                height="50px"
                src={logo}
                className="App-logo"
                alt="logo"
            />
            <Heading color="evilPurple">Home</Heading>
            {props.routes.map((route) => {
                return <Link to={route.path}>{route.path}</Link>;
            })}
            <hr />
            <Credits />
        </VStack>
    );
}

export default Sidebar;
