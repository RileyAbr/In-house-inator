import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import commands from "../../commands.json";

const markDownFilenameParserRegex = new RegExp(/(^\.\/+|.md+$)/gm);

const importAll = (r) => r.keys().map(r);
const commandMarkdownFilesPaths = importAll(
    require.context("../../commands_desc", false, /\.md$/)
);

// const commandMarkdownFilesPaths = require
//     .context("../../commands_desc", false, /\.md$/)
//     .keys();

const commandMarkdownFileNames = require
    .context("../../commands_desc", false, /\.md$/)
    .keys()
    .map((filePath) => {
        return filePath.replace(markDownFilenameParserRegex, "");
    });

const commandMarkdownFilesMap = Object.assign(
    ...commandMarkdownFileNames.map((v, i) => ({
        [v]: commandMarkdownFilesPaths[i],
    }))
);

console.log(commandMarkdownFilesPaths);
console.log(commandMarkdownFileNames);
console.log(commandMarkdownFilesMap);

export default function Content() {
    const [commandDesc, setCommandDesc] = useState(null);
    const commandParam = useParams().command; //If the user is on a command page, it is stored as a query parameter labeled {command: *}

    console.log(commandMarkdownFilesMap[useParams().command]);

    useEffect(() => {
        if (
            commands.includes(commandParam.toLowerCase()) &&
            commandMarkdownFilesMap[commandParam]
        ) {
            fetch(commandMarkdownFilesMap[commandParam])
                .then((res) => res.text())
                .then((text) => setCommandDesc(text));
        } else {
            setCommandDesc("# Sorry! This command doesn't exist.");
        }
    }, [commandParam]);

    return (
        <>
            <ReactMarkdown source={commandDesc} />
        </>
    );
}
