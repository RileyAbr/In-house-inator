import React from "react";
import ReactMarkdown from "react-markdown/with-html";

import CodeDisplay from "../CodeDisplay";

import { Text, Image, Heading } from "@chakra-ui/core";

const MarkdownParagraph = (props) => {
    return <Text fontSize="lg">{props.children}</Text>;
};

const MarkdownCode = (props) => {
    return <CodeDisplay fontSize="lg">{props.children}</CodeDisplay>;
};

const MarkDownImage = (props) => {
    return <Image mx="auto" py={3} src={props.src} alt={props.alt} />;
};

const MarkDownHeader = (props) => {
    return (
        <Heading as="h3" size="lg">
            {props.children}
        </Heading>
    );
};

const ChakraMarkdown = (props) => {
    // These renderers control what components are rendered from the markdown file. By supplying it with Charka UI components, it will keep a consistant style with the rest of the page
    const chakraRenderers = {
        paragraph: MarkdownParagraph,
        inlineCode: MarkdownCode,
        image: MarkDownImage,
        heading: MarkDownHeader,
    };

    return (
        <ReactMarkdown
            source={props.source}
            renderers={chakraRenderers}
            escapeHtml={false}
        />
    );
};

export default ChakraMarkdown;
