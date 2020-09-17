import React from "react";
import { Link } from "react-router-dom";

import { Heading } from "@chakra-ui/core";

function Sidebar(props) {
    return (
        <div>
            <Heading color="evilPurple">Home</Heading>
            {props.routes.map((route) => {
                return <Link to={route.path}>{route.path}</Link>;
            })}
            <hr />
            {props.children}
        </div>
    );
}

export default Sidebar;
