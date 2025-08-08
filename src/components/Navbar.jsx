import { Box, Flex, HStack, Button, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
    return (
        <Box bg="thinkICE.cobaltBlue" px={8} py={3} boxShadow="sm">
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <HStack spacing={2}>
                    <Text fontSize="xl" fontWeight="bold" color="thinkICE.tealLight">
                        ❄️
                    </Text>
                    <Text fontSize="lg" fontWeight="semibold" color="thinkICE.iceYellow">
                        Think ICE
                    </Text>
                </HStack>

                <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
                    <Button as={RouterLink} to="/" variant="link" color="thinkICE.iceYellow">
                        Home
                    </Button>
                    <Button as={RouterLink} to="/steps" variant="link" color="thinkICE.iceYellow">
                        ICE
                    </Button>
                    <Button as={RouterLink} to="/techniques" variant="link" color="thinkICE.iceYellow">
                        About
                    </Button>
                    <Button as={RouterLink} to="/philosophy" variant="link" color="thinkICE.iceYellow">
                        Philosophy
                    </Button>
                </HStack>
            </Flex>
        </Box>

    );
}

export default Navbar;
