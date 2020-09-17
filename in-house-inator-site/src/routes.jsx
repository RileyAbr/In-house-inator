// import React from "react";

import Content from "./components/Content";

const routes = [
    { path: "/home", component: Content },
    { path: "/contact", component: Content },
    { path: "/:command", component: Content },
    { path: "/", component: Content },
];

export default routes;
