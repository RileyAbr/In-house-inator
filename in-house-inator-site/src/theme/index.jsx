import { theme } from "@chakra-ui/core";
import { merge } from "@chakra-ui/utils";

const customTheme = {
    colors: {
        scienceBlack: "#2F3136",
        scienceGrey: "#383B42",
        scienceWhite: "#EFF2F1",
        scienceGreen: {
            500: "#6BD425",
            600: "#58AD1F",
        },
        sciencePurple: {
            500: "#6F2DBD",
            600: "#6027A5",
        },
    },
    fonts: {
        // Original Fonts
        // body: "Roboto Slab, serif",
        // heading: "Ruda, sans-serif",
        body: "Lato, sans-serif",
        heading: "Arvo, serif",
    },
    transitions: {
        short: "250ms",
        medium: "600ms",
    },
};

export default merge(theme, customTheme);
