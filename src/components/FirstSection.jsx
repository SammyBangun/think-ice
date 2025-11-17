import {
    Box,
    Text,
    Flex,
    Card,
    CardBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

export default function FirstSection() {
    const cards = [
        { title: "I (Identify)", text: "Identifikasi masalah tanpa terbawa emosi" },
        { title: "C (Calm)", text: "Tenangkan diri sebelum mengambil keputusan" },
        { title: "E (Evaluate)", text: "Evaluasi pilihan solusi secara logis" },
    ];

    return (
        <Box id="FirstSection" bg="thinkICE.cobaltBlue" py={16} px={{ base: 6, md: 12 }} color="white">
            <Flex
                flexDirection={{ base: "column", md: "row" }}
                justify="center"
                align="stretch"
                gap={8}
                flexWrap="wrap"
            >
                {cards.map((item, i) => (
                    <MotionCard
                        key={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i}
                        bg="rgba(255, 255, 255, 0.15)"
                        backdropFilter="blur(12px)"
                        border="1px solid rgba(255, 255, 255, 0.25)"
                        borderRadius="2xl"
                        boxShadow="0 8px 25px rgba(0, 0, 0, 0.25)"
                        p={6}
                        w={{ base: "100%", md: "28%" }}
                        cursor="pointer"
                        transition="all 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
                        position="relative"
                        overflow="hidden"
                        _before={{
                            content: '""',
                            position: "absolute",
                            top: "-20%",
                            left: "-20%",
                            w: "140%",
                            h: "140%",
                            bg: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0))",
                            opacity: 0,
                            transition: "0.4s",
                        }}
                        whileHover={{
                            scale: 1.06,
                            rotate: 1,
                            boxShadow: "0 0 45px rgba(91, 200, 172, 0.55)",
                            transition: { duration: 0.25 },
                        }}
                        _hover={{
                            _before: { opacity: 1 },
                            border: "1px solid rgba(249, 249, 167, 0.7)",
                        }}
                    >
                        <CardBody>
                            <Text
                                fontSize="2xl"
                                fontWeight="extrabold"
                                letterSpacing="0.5px"
                                bgGradient="linear(to-r, thinkICE.iceYellow, white)"
                                bgClip="text"
                                textShadow="0px 0px 12px rgba(249, 249, 167, 0.35)"
                                mb={2}
                            >
                                {item.title}
                            </Text>

                            <Text
                                fontSize="lg"
                                fontWeight="medium"
                                color="white"
                                opacity={0.9}
                                lineHeight="1.6"
                                letterSpacing="0.2px"
                            >
                                {item.text}
                            </Text>
                        </CardBody>
                    </MotionCard>
                ))}
            </Flex>

            <Box mt={10} textAlign="center">
                <Text fontSize="md" color="thinkICE.iceYellow">
                    Berbasis tindakan spesifik, misalnya:{" "}
                    <strong>Dinginkan Dulu – Analisa – Ambil Keputusan.</strong>
                </Text>
            </Box>
        </Box>
    );
}
