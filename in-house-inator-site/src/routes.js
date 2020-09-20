import Home from "./components/Home";
import Content from "./components/Content";

import commands from "./commands.json";

const routes = [
    { path: "/:command", component: Content },
    { path: "/", component: Home, exact: true },
];

export default routes;
