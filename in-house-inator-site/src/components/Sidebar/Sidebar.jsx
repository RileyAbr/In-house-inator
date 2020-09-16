import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
    return (
        <div>
            Home
            {props.routes.map((route) => {
                return <Link to={route.path}>{route.path}</Link>;
            })}
            <hr />
            {props.children}
        </div>
    );
}

export default Sidebar;
