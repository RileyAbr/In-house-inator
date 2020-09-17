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
            role="group"
        >
            <Image
                width="75px"
                height="auto"
                src={logo}
                display="inline"
                alt="logo"
                marginBottom="4px"
                // transition="600ms"
                _groupHover={{
                    transform: "rotate(360deg)",
                    transition: "600ms",
                }}
            />
            <Heading
                as="h1"
                lineHeight="1"
                color="sciencePurple"
                _after={{
                    // In regular CSS one can just do the empty quotes, but the Chakra compiler reads this as completely empty and won't attach the empty content
                    content: `""`,
                    display: "block",
                    bottom: "-10px",
                    width: "0px",
                    height: "4px",
                    bg: "sciencePurple",
                    transition: "250ms",
                }}
                _groupHover={{
                    _after: { width: "100%", transition: "250ms" },
                }}
            >
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
                fontSize="2xl"
                fontFamily="heading"
                listStyleType="disc"
                color="scienceGreen"
            >
                {props.commands &&
                    props.commands.map((command, i) => {
                        return (
                            <ListItem key={i}>
                                <Link
                                    // _hover={}
                                    as={ReactRouterLink}
                                    to={command}
                                >
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
