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
        <Flex
            as={ReactRouterLink}
            to="/"
            alignItems={["center", "center", "normal"]}
        >
            <Image
                width="75px"
                height="auto"
                src={logo}
                display="inline"
                alt="logo"
            />
            <Heading as="h1" lineHeight="1" color="sciencePurple">
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
                fontFamily="heading"
                listStyleType="disc"
                color="scienceGreen"
            >
                {props.commands &&
                    props.commands.map((command, i) => {
                        return (
                            <ListItem key={i}>
                                <Link as={ReactRouterLink} to={command}>
                                    {command}
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
