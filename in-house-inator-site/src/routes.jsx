import React from "react";

import Content from "./components/Content";

const routes = [
    { path: "/", component: Content },
    { path: "/home", component: Content },
    { path: "/:command", component: Content },
    { path: "/contact", component: Content },
];

export default routes;
