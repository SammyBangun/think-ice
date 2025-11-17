import {
    Box,
    Flex,
    Text,
    Image,
    Link,
    VStack,
    HStack,
    Divider,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";
import FotoProfil from "../assets/Kahlil-cropped.png";

export default function Footer() {
    return (
        <Box
            bg="thinkICE.navy"
            color="white"
            py={14}
            px={{ base: 6, md: 20 }}
            position="relative"
            overflow="hidden"
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="rgba(255,255,255,0.04)"
                backdropFilter="blur(10px)"
                zIndex={0}
            />

            <Box
                position="absolute"
                top="-60px"
                right="-60px"
                w="300px"
                h="300px"
                bg="radial-gradient(circle, rgba(249,249,167,0.25), transparent 70%)"
                filter="blur(40px)"
                zIndex={0}
            />

            <Flex
                position="relative"
                zIndex={2}
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align={{ base: "center", md: "flex-start" }}
                gap={10}
            >
                <Flex
                    direction="row"
                    align="center"
                    gap={5}
                >
                    <Image
                        src={FotoProfil}
                        alt="Creator Photo"
                        boxSize="90px"
                        borderRadius="full"
                        border="3px solid rgba(255,255,255,0.2)"
                        boxShadow="0 0 25px rgba(255,255,255,0.2)"
                    />

                    <VStack align="start" spacing={1}>
                        <Text
                            fontSize="xl"
                            fontWeight="bold"
                            bgGradient="linear(to-r, thinkICE.iceYellow, white)"
                            bgClip="text"
                        >
                            Creator Think ICE
                        </Text>
                        <Text
                            fontSize="l"
                            fontWeight="bold"
                            bgGradient="linear(to-r, thinkICE.iceYellow, white)"
                            bgClip="text"
                        >
                            Kahlil Rifqi Samoedra Bangun
                        </Text>
                        <Text fontSize="md" opacity={0.85}>
                            Seorang yang ingin menciptakan sesuatu yang berarti bagi diri sendiri dan orang lain
                        </Text>

                        <HStack spacing={4} mt={2}>
                            <Link href="https://instagram.com/kahlilrifqi9" isExternal>
                                <FaInstagram size={22} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/kahlil-bangun-99aa44299/" isExternal>
                                <FaLinkedin size={22} />
                            </Link>
                            <Link href="#" isExternal>
                                <FaGlobe size={22} />
                            </Link>
                        </HStack>
                    </VStack>
                </Flex>
            </Flex>

            <Divider my={8} borderColor="rgba(255,255,255,0.2)" />

            <Text
                textAlign="center"
                opacity={0.5}
                fontSize="sm"
            >
                © {new Date().getFullYear()} Think ICE — Created by Kahlil.
            </Text>
        </Box>
    );
}
