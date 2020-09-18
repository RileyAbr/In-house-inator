// import React from "react";

import Content from "./components/Content";

const routes = [
    { path: "/:command", component: Content },
    { path: "/", component: Content },
];

export default routes;
