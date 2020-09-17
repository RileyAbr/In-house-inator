import { theme } from "@chakra-ui/core";
import { merge } from "@chakra-ui/utils";

const customTheme = {
    colors: {
        evilBlack: "#2F3136",
        evilGrey: "#7B818E",
        evilWhite: "#EFF2F1",
        evilGreen: "#6BD425",
        evilPurple: "#6F2DBD",
    },
};

export default merge(theme, customTheme);
