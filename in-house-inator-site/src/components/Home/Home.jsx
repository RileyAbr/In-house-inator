import React from "react";

import CodeDisplay from "../CodeDisplay";
import InviteButton from "../InviteButton";

import { Center, VStack, Heading, Text } from "@chakra-ui/core";

function Home() {
    return (
        <Center h="100%">
            <VStack spacing={5}>
                <Heading
                    size="2xl"
                    fontSize="6xl"
                    as="h2"
                    px="2"
                    color="sciencePurple.500"
                    mt="-20"
                >
                    <Heading
                        as="p"
                        size="xl"
                        fontFamily="body"
                        position="relative"
                        left="-12"
                        bottom="-5"
                        color="scienceWhite"
                        transform="rotate(-10deg)"
                        display="block"
                        w="min-content"
                    >
                        The
                    </Heading>
                    In-house-inator
                </Heading>
                <Heading as="h3" size="md" fontStyle="italic" fontFamily="body">
                    "Discord in-houses to take over the entire tri-server area!"
                </Heading>

                <Text fontSize="lg" maxW="600px" p={4}>
                    The <CodeDisplay>In-house-inator</CodeDisplay> is a Discord
                    bot designed to help faciliate in-house matches for gaming
                    communities. The bot can build teams on the spot using
                    members in voice chat to streamline the lobby-making
                    process. With a robust set of commands available, the{" "}
                    <CodeDisplay>In-house-inator</CodeDisplay> is ready for your
                    next LAN party.
                </Text>

                <InviteButton />
            </VStack>
        </Center>
    );
}

export default Home;
