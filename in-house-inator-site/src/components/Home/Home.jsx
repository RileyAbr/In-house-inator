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
                    href=""
                >
                    Invite to Your Server
                </Button>
            </VStack>
        </Center>
    );
}

export default Home;
