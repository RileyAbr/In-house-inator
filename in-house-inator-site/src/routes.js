import Home from "./components/Home";
import Content from "./components/Content";

import commands from "./commands.json";

const routes = [];

// Get all commands from the JSON file and match them to a component
commands.map((command) => {
    routes.push({ path: `/${command}`, component: Content });
});

// Push the home component that must be an exact match, other URLs are redirected
routes.push({ path: "/", component: Home, exact: true });

export default routes;
