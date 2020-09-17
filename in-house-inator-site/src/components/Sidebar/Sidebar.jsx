import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";

import { Flex, Heading, VStack } from "@chakra-ui/core";

import Credits from "../Credits";

const LogoMasthead = () => {
    return (
        <Flex>
            <img
                width="50px"
                height="50px"
                src={logo}
                className="App-logo"
                alt="logo"
            />
            <Heading color="sciencePurple">Home</Heading>
        </Flex>
    );
};

function Sidebar(props) {
    return (
        <VStack as="nav" height="100%">
            <LogoMasthead />

            {props.routes.map((route) => {
                return <Link to={route.path}>{route.path}</Link>;
            })}
            <Credits />
        </VStack>
    );
}

export default Sidebar;
