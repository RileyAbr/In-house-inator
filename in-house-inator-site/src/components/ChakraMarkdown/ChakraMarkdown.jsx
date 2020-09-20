import React from "react";
import ReactMarkdown from "react-markdown";

import CodeDisplay from "../CodeDisplay";

import { Text, Image } from "@chakra-ui/core";

const MarkdownParagraph = (props) => {
    return <Text fontSize="lg">{props.children}</Text>;
};

const MarkdownCode = (props) => {
    return <CodeDisplay fontSize="lg">{props.children}</CodeDisplay>;
};

const ChakraMarkdown = (props) => {
    // These renderers control what components are rendered from the markdown file. By supplying it with Charka UI components, it will keep a consistant style with the rest of the page
    const chakraRenderers = {
        image: Image,
        paragraph: MarkdownParagraph,
        inlineCode: MarkdownCode,
    };

    return <ReactMarkdown source={props.source} renderers={chakraRenderers} />;
};

export default ChakraMarkdown;
