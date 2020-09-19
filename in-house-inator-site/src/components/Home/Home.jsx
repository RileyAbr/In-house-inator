import React from "react";

import { Center, VStack, Button, Heading } from "@chakra-ui/core";

function Home() {
    return (
        <Center h="100%">
            <VStack>
                <Heading size="2xl" fontSize="6xl" as="h2">
                    In-house-inator
                </Heading>

                <Button
                    size="lg"
                    fontFamily="heading"
                    fontWeight="normal"
                    color="scienceGrey"
                    colorScheme="scienceGreen"
                    as="a"
                    href="https://discord.com/api/oauth2/authorize?client_id=717139360272613526&permissions=0&scope=bot"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Invite to Your Server
                </Button>
            </VStack>
        </Center>
    );
}

export default Home;
