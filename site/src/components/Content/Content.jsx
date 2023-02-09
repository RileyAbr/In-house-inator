import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ChakraMarkdown from "../ChakraMarkdown";

import { Box, Divider, Heading } from "@chakra-ui/core";

import { capitalizeFirstLetter } from "../../utils";

import commandsFilesMap from "../../services/CommandMarkdownFileFetcher";

export default function Content() {
    const [commandDesc, setCommandDesc] = useState(null);
    const commandParam = useParams().command; //If the user is on a command page, it is stored as a query parameter labeled {command: *}

    useEffect(() => {
        if (commandsFilesMap[commandParam]) {
            fetch(commandsFilesMap[commandParam])
                .then((res) => res.text())
                .then((text) => setCommandDesc(text));
        } else {
            setCommandDesc("Sorry! This command doesn't exist.");
        }
    }, [commandParam]);

    return (
        <>
            <Box maxW="700px" mx="auto" p={3} minH="100vh">
                <Heading as="h2" size="2xl">
                    {capitalizeFirstLetter(commandParam)}
                </Heading>
                <Divider
                    borderWidth="2px"
                    borderColor="sciencePurple.500"
                    borderRadius="1px"
                    my={1}
                />
                <ChakraMarkdown source={commandDesc} />
            </Box>
        </>
    );
}
