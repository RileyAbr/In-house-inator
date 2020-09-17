import React from "react";
import { Route, Switch } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/core";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar/";

import routes from "./routes";

function App() {
    return (
        <Flex
            height="100vh"
            flexDir={["column", "column", "row"]}
            bg="scienceBlack"
            color="scienceWhite"
        >
            <Box as="aside" flex="0 0 17rem">
                <Sidebar routes={routes} />
            </Box>

            <Box as="main" flex="1" bg="scienceGrey">
                <Switch>
                    {routes.map((route) => {
                        return <Route {...route} />;
                    })}
                </Switch>
            </Box>
        </Flex>
    );
}

export default App;
