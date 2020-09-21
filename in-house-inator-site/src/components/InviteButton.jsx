import React from "react";

import { Center, Text, Button } from "@chakra-ui/core";

// Credit to https://jarv.is/notes/css-waving-hand-emoji/ for the fantastic waving animation! 👋
const keyFrameExampleOne = `
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }
    100% { transform: rotate( 0.0deg) }
`;

// animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
//   animation-duration: 2.5s;        /* Change to speed up or slow down */
//   animation-iteration-count: infinite;  /* Never stop waving :) */
//   transform-origin: 70% 70%;

const InviteButton = () => {
    return (
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
            role="link"
            px="0"
        >
            <Center role="group" h="100%" px="6">
                <Text
                    as="span"
                    role="img"
                    aria-label="waving"
                    display="inline-block"
                    _groupHover={{
                        transform: "rotate(180deg)",
                    }}
                >
                    👋
                </Text>{" "}
                Invite to Your Server
            </Center>
        </Button>
    );
};

export default InviteButton;
