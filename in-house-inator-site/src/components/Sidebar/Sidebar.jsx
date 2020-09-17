import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import logo from "../../in-house-inator_logo.png";

import {
    Flex,
    Image,
    Heading,
    VStack,
    UnorderedList,
    ListItem,
    Link,
} from "@chakra-ui/core";

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

            {/* As of 9/17, the UnorderedList component from Chakra is broken and needs a bullet specified to be unordered */}
            <UnorderedList
                w="80%"
                fontSize="xl"
                listStyleType="disc"
                color="scienceGreen"
            >
                {props.routes.map((route) => {
                    return (
                        <ListItem>
                            <Link as={ReactRouterLink} to={route.path}>
                                {route.path}
                            </Link>
                        </ListItem>
                    );
                })}
            </UnorderedList>
            <Credits />
        </VStack>
    );
}

export default Sidebar;
