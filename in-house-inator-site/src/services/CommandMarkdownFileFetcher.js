import { createObjectFromTwoArrays } from "../utils";

function importAll(r) {
    return r.keys().map(r);
}

// These lines take the folder labeled "commands_desc" and creates a Map-like object out of the file paths and names of the individual .md files
const markDownFilenameParserRegex = new RegExp(/(^\.\/+|.md+$)/gm);

const markdownFilesPaths = importAll(
    require.context("../commands_desc", false, /\.md$/)
);

const markdownFilesNames = require
    .context("../commands_desc", false, /\.md$/)
    .keys()
    .map((filePath) => {
        return filePath.replace(markDownFilenameParserRegex, "");
    });

const commandsFilesMap = createObjectFromTwoArrays(
    markdownFilesNames,
    markdownFilesPaths
);

export default commandsFilesMap;
