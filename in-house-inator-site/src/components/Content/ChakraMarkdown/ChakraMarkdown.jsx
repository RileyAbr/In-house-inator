import React from "react";
import ReactMarkdown from "react-markdown";

import CodeDisplay from "../../CodeDisplay";

import { Text, Image } from "@chakra-ui/core";

const markdownParagraph = (props) => {
    return <Text fontSize="lg">{props.children}</Text>;
};

const ChakraMarkdown = (props) => {
    // These renderers control what components are rendered from the markdown file. By supplying it with Charka UI components, it will keep a consistant style with the rest of the page
    const chakraRenderers = {
        image: Image,
        paragraph: markdownParagraph,
        inlineCode: CodeDisplay,
        code: CodeDisplay,
    };

    return <ReactMarkdown source={props.source} renderers={chakraRenderers} />;
};

export default ChakraMarkdown;
