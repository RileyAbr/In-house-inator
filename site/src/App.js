import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/core';

import Sidebar from './components/Sidebar/';

import routes from './routes';

import commandsFilesMap from './services/CommandMarkdownFileFetcher';

function App() {
    return (
        <Flex
            height="100vh"
            flexDir={['column', 'column', 'row']}
            bg="scienceBlack"
            color="scienceWhite"
            data-testid="app-container"
        >
            <Box as="aside" flex="0 0 17rem">
                <Sidebar commands={Object.keys(commandsFilesMap)} />
            </Box>

            <Box as="main" flex="1" bg="scienceGrey">
                <Switch>
                    {/* Redirect anything that is more than a single url param */}
                    {routes.map((route, i) => {
                        return <Route key={i} {...route} />;
                    })}
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Box>
        </Flex>
    );
}

export default App;
