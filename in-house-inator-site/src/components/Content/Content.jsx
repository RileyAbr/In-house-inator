import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ChakraMarkdown from "../ChakraMarkdown";

import { Box, Divider, Heading } from "@chakra-ui/core";

import commands from "../../commands.json";

import {
    capitalizeFirstLetter,
    importAll,
    createObjectFromTwoArrays,
} from "../../utils";

// These lines take the folder labeled "commands_desc" and creates a Map-like object out of the file paths and names of the individual .md files
const markDownFilenameParserRegex = new RegExp(/(^\.\/+|.md+$)/gm);

const commandMarkdownFilesPaths = importAll(
    require.context("../../commands_desc", false, /\.md$/)
);

const commandMarkdownFilesNames = require
    .context("../../commands_desc", false, /\.md$/)
    .keys()
    .map((filePath) => {
        return filePath.replace(markDownFilenameParserRegex, "");
    });

const commandMarkdownFilesMap = createObjectFromTwoArrays(
    commandMarkdownFilesNames,
    commandMarkdownFilesPaths
);

export default function Content() {
    const [commandDesc, setCommandDesc] = useState(null);
    const commandParam = useParams().command; //If the user is on a command page, it is stored as a query parameter labeled {command: *}

    useEffect(() => {
        // The component first checks if the current URL param matches any command in the json set-up file. Then if checks if there is a matching .md file for that command name
        if (
            commands.includes(commandParam.toLowerCase()) &&
            commandMarkdownFilesMap[commandParam]
        ) {
            fetch(commandMarkdownFilesMap[commandParam])
                .then((res) => res.text())
                .then((text) => setCommandDesc(text));
        } else {
            setCommandDesc("Sorry! This command doesn't exist.");
        }
    }, [commandParam]);

    return (
        <>
            <Box maxW="700px" mx="auto" p={3}>
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
