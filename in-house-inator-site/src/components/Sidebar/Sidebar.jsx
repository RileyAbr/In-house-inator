import React from "react";
import { Link } from "react-router-dom";

import logo from "../../in-house-inator_logo.png";

import { Flex, Image, Heading, VStack } from "@chakra-ui/core";

import Credits from "../Credits";

const LogoMasthead = () => {
    return (
        <Flex alignItems={["center", "center", "normal"]}>
            <Image
                width="75px"
                height="auto"
                src={logo}
                display="inline"
                alt="logo"
            />
            <Heading lineHeight="1" color="sciencePurple">
                In-house-inator
            </Heading>
        </Flex>
    );
};

function Sidebar(props) {
    return (
        <VStack as="nav" height="100%" p={2}>
            <LogoMasthead />

            {props.routes.map((route) => {
                return <Link to={route.path}>{route.path}</Link>;
            })}
            <Credits />
        </VStack>
    );
}

export default Sidebar;
