import React from "react";

import { Code } from "@chakra-ui/core";

const CodeDisplay = (props) => {
    return (
        <Code role="figure" display="inline" m={1} fontSize={props.fontSize}>
            {props.children}
        </Code>
    );
};

CodeDisplay.defaultProps = {
    fontSize: "md",
};

export default CodeDisplay;
