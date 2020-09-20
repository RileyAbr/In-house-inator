import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import help from "../../commands_desc/help.md";

export default function Content() {
    const [commandDesc, setCommandDesc] = useState(null);

    useEffect(() => {
        fetch(help)
            .then((res) => res.text())
            .then((text) => setCommandDesc(text));
    });

    return (
        <>
            <ReactMarkdown source={commandDesc} />
        </>
    );
}
