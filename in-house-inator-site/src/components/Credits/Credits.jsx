import React from "react";

import { Flex, Box, Link } from "@chakra-ui/core";

export default function Credits() {
    return (
        <Flex
            position="fixed"
            bottom="0"
            w={["100%", "100%", "auto"]}
            bg="scienceBlack"
            flexDir={["row", "row", "column"]}
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            p={2}
        >
            <Link
                href="https://github.com/RileyAbr/In-house-inator"
                isExternal
                px={0}
            >
                GitHub Repo
            </Link>
            <Box display={["block", "block", "none"]} px={1}>
                |
            </Box>
            <Box px={0}>
                Created by&nbsp;
                <Link href="https://www.rileyabrahamson.com/" isExternal>
                    Riley Abrahamson
                </Link>
            </Box>
        </Flex>
    );
}
