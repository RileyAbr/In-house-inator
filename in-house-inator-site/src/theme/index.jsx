import { theme } from "@chakra-ui/core";
import { merge } from "@chakra-ui/utils";

const customTheme = {
    colors: {
        scienceBlack: "#2F3136",
        scienceGrey: "#383B42",
        scienceWhite: "#EFF2F1",
        scienceGreen: "#6BD425",
        sciencePurple: "#6F2DBD",
    },
    fonts: {
        body: "Roboto Slab, serif",
        heading: "Ruda, sans-serif",
    },
};

export default merge(theme, customTheme);
