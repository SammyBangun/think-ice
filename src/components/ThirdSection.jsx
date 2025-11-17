import { Box, Text, Heading, VStack, useTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function ThirdSection() {
    const theme = useTheme();
    const { thinkICE } = theme.colors;

    return (
        <Box
            bg={thinkICE.cobaltBlue}
            py={{ base: 16, md: 24 }}
            px={{ base: 6, md: 12 }}
            color="white"
        >
            <MotionBox
                maxW="900px"
                mx="auto"
                textAlign="center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                p={10}
                rounded="2xl"
                bg="rgba(255, 255, 255, 0.08)"
                backdropFilter="blur(14px)"
                border="1px solid rgba(255,255,255,0.18)"
                boxShadow="0 20px 60px rgba(0,0,0,0.4)"
                position="relative"
                overflow="hidden"
            >
                {/* Sweep Light Glow */}
                <Box
                    position="absolute"
                    top="-40%"
                    left="-20%"
                    w="160%"
                    h="180%"
                    bg="linear-gradient(120deg, rgba(255,255,255,0.18), transparent)"
                    transform="translateX(-120%)"
                    animation="sweep 6s infinite ease-in-out"
                    zIndex={0}
                />

                <Heading
                    size="2xl"
                    fontWeight="extrabold"
                    bgGradient="linear(to-r, thinkICE.iceYellow, white)"
                    bgClip="text"
                    textShadow="0px 0px 20px rgba(249,249,167,0.4)"
                    mb={6}
                    position="relative"
                    zIndex={2}
                >
                    Filosofi Think ICE
                </Heading>

                <VStack spacing={6} position="relative" zIndex={2}>
                    <Text fontSize="lg" opacity={0.95} lineHeight="1.7">
                        Think ICE lahir dari kebutuhan sederhana:{" "}
                        <strong>membantu orang berpikir lebih jernih di saat emosi memuncak.</strong>
                    </Text>

                    <Text fontSize="lg" opacity={0.9} lineHeight="1.7">
                        Sebagai manusia, kita mudah tenggelam dalam reaksi spontan.
                        Think ICE dibuat sebagai <strong>mental model</strong> untuk
                        menghentikan “panasnya” respon cepat, lalu menggantinya dengan{" "}
                        <strong>kejernihan, kendali, dan logika yang tenang.</strong>
                    </Text>

                    <Text fontSize="lg" opacity={0.85} lineHeight="1.7">
                        Visi Think ICE adalah menjadikan metode ini sebagai{" "}
                        <strong>alat sederhana</strong> yang bisa dipakai siapa saja
                        dalam hidup, pekerjaan, hubungan, hingga keputusan besar.
                    </Text>
                </VStack>
            </MotionBox>

            {/* Keyframe Animation */}
            <style>{`
                @keyframes sweep {
                    0% { transform: translateX(-120%); }
                    50% { transform: translateX(80%); }
                    100% { transform: translateX(-120%); }
                }
            `}</style>
        </Box>
    );
}
