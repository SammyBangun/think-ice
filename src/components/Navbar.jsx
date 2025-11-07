import { Box, Flex, HStack, Button, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegSnowflake } from "react-icons/fa";
import { MotionText, MotionButton } from "../functions/addMotion";

const MotionIcon = motion(FaRegSnowflake);

function Navbar() {
    return (
        <Box
            bg="thinkICE.cobaltBlue"
            px={8}
            py={3}
            boxShadow="0 6px 20px rgba(255, 255, 255, 0.15)"
            borderBottom="1px solid rgba(255, 255, 255, 0.15)"
            backdropFilter="blur(10px)"
            bgGradient="linear(to-r, thinkICE.cobaltBlue, thinkICE.tealLightAlpha)"
        >
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <HStack
                    spacing={2}
                    cursor="pointer"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    as={motion.div}
                >
                    <MotionIcon
                        color="white"
                        size="1.8em"
                        variants={{
                            rest: { rotate: 0, scale: 1 },
                            hover: {
                                rotate: 360,
                                scale: 1.2,
                                filter: "drop-shadow(0 0 10px rgba(200, 240, 255, 0.8))",
                                transition: { duration: 1.2, ease: "easeInOut" },
                            },
                        }}
                    />

                    <MotionText
                        fontSize="lg"
                        fontWeight="semibold"
                        color="thinkICE.iceYellow"
                        variants={{
                            rest: { scale: 1, textShadow: "0 0 0 rgba(255,255,255,0)" },
                            hover: {
                                scale: 1.15,
                                textShadow:
                                    "0 0 8px rgba(255,255,255,0.6), 0 0 14px rgba(180,220,255,0.8)",
                                transition: { type: "spring", stiffness: 200, damping: 12 },
                            },
                        }}
                    >
                        Think ICE
                    </MotionText>
                </HStack>

                <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
                    {[
                        { label: "Home", to: "/" },
                        { label: "ICE", to: "/steps" },
                        { label: "About", to: "/techniques" },
                        { label: "Philosophy", to: "/philosophy" },
                    ].map((link) => (
                        <MotionButton
                            key={link.to}
                            as={RouterLink}
                            to={link.to}
                            variant="ghost"
                            color="thinkICE.iceYellow"
                            fontWeight="medium"
                            _hover={{ textDecoration: "none" }}
                            whileHover={{
                                scale: 1.1,
                                background:
                                    "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(8px)",
                                boxShadow:
                                    "0 0 12px rgba(173, 216, 230, 0.6), inset 0 0 6px rgba(255, 255, 255, 0.2)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            rounded="md"
                            px={3}
                            py={2}
                        >
                            {link.label}
                        </MotionButton>
                    ))}
                </HStack>
            </Flex>
        </Box>
    );
}

export default Navbar;
