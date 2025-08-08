import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box bg="thinkICE.navy" p={4} color="white" textAlign="center">
            <Text>&copy; {new Date().getFullYear()} Think ICE. All rights reserved.</Text>
        </Box>
    );
}