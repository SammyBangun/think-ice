import { Box, Flex, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaRegSnowflake } from "react-icons/fa";
import { MotionText, MotionButton } from "../functions/addMotion";

const MotionIcon = motion(FaRegSnowflake);

function Navbar() {
    const navItems = [
        { label: "Home", to: "Jumbotron" },
        { label: "ICE", to: "FirstSection" },
        { label: "About", to: "SecondSection" },
        { label: "Philosophy", to: "ThirdSection" },
    ];

    return (
        <Box
            bg="thinkICE.cobaltBlue"
            px={8}
            py={3}
            position="sticky"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            boxShadow="0 6px 20px rgba(255, 255, 255, 0.15)"
            borderBottom="1px solid rgba(255, 255, 255, 0.15)"
            backdropFilter="blur(10px)"
            bgGradient="linear(to-r, thinkICE.cobaltBlue, thinkICE.tealLightAlpha)"
        >
            <Flex h={16} alignItems="center" justifyContent="space-between">

                {/* Logo */}
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
                                filter:
                                    "drop-shadow(0 0 10px rgba(200, 240, 255, 0.8))",
                                transition: {
                                    duration: 1.2,
                                    ease: "easeInOut",
                                },
                            },
                        }}
                    />

                    <MotionText
                        fontSize="lg"
                        fontWeight="semibold"
                        color="thinkICE.iceYellow"
                        variants={{
                            rest: { scale: 1, opacity: 0.8 },
                            hover: {
                                scale: 1.15,
                                opacity: 1,
                                textShadow:
                                    "0 0 8px rgba(255,255,255,0.6), 0 0 14px rgba(180,220,255,0.8)",
                                transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 12,
                                },
                            },
                        }}
                    >
                        Think ICE
                    </MotionText>
                </HStack>

                {/* Navigation */}
                <HStack spacing={6} display={{ base: "none", md: "flex" }}>
                    {navItems.map((link) => (
                        <ScrollLink
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={700}
                            offset={-80}
                            spy={true}
                        >
                            <MotionButton
                                variant="ghost"
                                color="thinkICE.iceYellow"
                                fontWeight="medium"
                                _hover={{ textDecoration: "none" }}
                                whileHover={{
                                    scale: 1.1,
                                    background: "rgba(255, 255, 255, 0.1)",
                                    backdropFilter: "blur(8px)",
                                    boxShadow:
                                        "0 0 12px rgba(173, 216, 230, 0.6), inset 0 0 6px rgba(255, 255, 255, 0.2)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 10,
                                }}
                                rounded="md"
                                px={3}
                                py={2}
                            >
                                {link.label}
                            </MotionButton>
                        </ScrollLink>
                    ))}
                </HStack>
            </Flex>
        </Box>
    );
}

export default Navbar;
