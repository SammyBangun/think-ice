import {
    Box,
    Text,
    Flex,
    Card,
    CardBody,
    Center,
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
        <Box bg="thinkICE.cobaltBlue" py={16} px={{ base: 6, md: 12 }} color="white">
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
                        bg="thinkICE.tealLight"
                        color="thinkICE.navy"
                        borderRadius="xl"
                        boxShadow="0 6px 20px rgba(0, 0, 0, 0.25)"
                        p={5}
                        w={{ base: "100%", md: "30%" }}
                        cursor="pointer"
                        transition="all 0.3s ease"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "#3AAFA9",
                            boxShadow: "0 0 60px #F9F9A7",
                            transition: { duration: 0.2 },
                        }}
                        _hover={{
                            color: "white",
                            transition: "color 0.3s ease-in-out",
                        }}
                    >
                        <CardBody>
                            <Text fontSize="xl" fontWeight="semibold" transition="color 0.3s ease">
                                {item.title}
                            </Text>
                            <Text fontSize="lg" fontWeight="semibold" transition="color 0.3s ease">
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
