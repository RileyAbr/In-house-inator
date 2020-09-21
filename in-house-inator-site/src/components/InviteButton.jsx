import React from "react";

import { Text, Button } from "@chakra-ui/core";
import styled, { keyframes } from "styled-components";

import theme from "../theme";

// Credit to https://jarv.is/notes/css-waving-hand-emoji/ for the fantastic waving animation! 👋
const keyframeWave = keyframes`
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }
    100% { transform: rotate( 0.0deg) }
`;

// Chakra UI elements do not play very nicely with Keyframes, so to compensate I decided to stick to CSS-in-JS solutions and whip up a few styled-components to meet the need. The WaveButton component is especially chunky as it re-builds the styles from the Chakra UI <Button> as those are lost when you use it in the styled() function
const WaveEmoji = styled(Text)`
    display: inline-block;
    font-size: 1.5rem;
`;
const WaveButton = styled(Button)`
    display: inline-flex;
    appearance: none;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    transition: all 250ms ease 0s;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    outline: currentcolor none medium;
    width: auto;
    line-height: 1.2;
    border-radius: 0.25rem;
    height: 3rem;
    min-width: 3rem;
    font-size: 1.125rem;
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    background: ${theme.colors.scienceGreen[500]} none repeat scroll 0% 0%;
    font-family: Arvo, serif;
    font-weight: 400;
    color: ${theme.colors.scienceGrey};

    &:hover,
    &:focus {
        background: ${theme.colors.scienceGreen[600]} none repeat scroll 0% 0%;
    }

    &:focus {
        box-shadow: rgba(66, 153, 225, 0.6) 0px 0px 0px 3px;
    }

    &:hover ${WaveEmoji}, &:focus ${WaveEmoji} {
        animation-name: ${keyframeWave}; /* Refers to the name of your @keyframes element below */
        animation-duration: 2.5s; /* Change to speed up or slow down */
        animation-iteration-count: infinite; /* Never stop waving :) */
        transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    }
`;

const InviteButton = () => {
    return (
        <WaveButton
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
        >
            {/* ESLint can't tell that this renders as a span with the emoji accessbility checks */}
            {/* eslint-disable-next-line */}
            <WaveEmoji as="span" role="img" aria-label="waving">
                👋
            </WaveEmoji>{" "}
            Invite to Your Server
        </WaveButton>
    );
};

export default InviteButton;
