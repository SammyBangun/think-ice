/* eslint-disable no-unused-vars */
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    List,
    ListItem,
    useTheme,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowAltCircleRight } from "react-icons/fa";
import { PiDiamondsFourBold, PiPushPinSimpleFill } from "react-icons/pi";
import { MotionIcon, MotionBox } from "../functions/addMotion.js"

const AnimatedText = ({ text, delay = 0 }) => {
    const words = String(text).split(" ");
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.035,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: "0.45em", filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: "0em",
            filter: "blur(0px)",
            transition: { duration: 0.45, ease: "easeOut" },
        },
    };

    return (
        <motion.span
            style={{ display: "inline-block" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {words.map((w, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    style={{ display: "inline-block", marginRight: 6 }}
                >
                    {w}
                </motion.span>
            ))}
        </motion.span>
    );
};

const slideLeft = {
    hidden: { opacity: 0, x: -80, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
};

const slideRight = {
    hidden: { opacity: 0, x: 80, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function SecondSection() {
    const theme = useTheme();
    const { thinkICE } = theme.colors;

    return (
        <Box
            id="SecondSection"
            bg={thinkICE?.cobaltBlue ?? "#0072ce"}
            py={{ base: 12, md: 20 }}
            px={{ base: 6, md: 12 }}
            color="white"
        >
            {/* optional intro heading */}
            <Box maxW="1100px" mx="auto" mb={8}>
                <Heading
                    as="h2"
                    size="2xl"
                    mb={4}
                    fontWeight="extrabold"
                    letterSpacing="0.5px"
                    display="flex"
                    alignItems="center"
                    gap={4}
                    bgGradient="linear(to-r, #F9F9A7, #ffffff, #5BC8AC)"
                    bgClip="text"
                    textShadow="0 0 18px rgba(249,249,167,0.20), 0 6px 40px rgba(0,114,206,0.06)"
                >
                    <span style={{ display: "inline-block" }}>
                        <AnimatedText text="Rincian teknik, prinsip dan contoh kasus dalam Think ICE." delay={0.02} />
                    </span>
                </Heading>

                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    maxW="900px"
                    color="rgba(255,255,255,0.92)"
                    opacity={0.95}
                >
                    <AnimatedText text="Terdapat beberapa cara penggunaan Think ICE. Berikut merupakan rincian teknik, prinsip dan contoh kasus dalam Think ICE." delay={0.12} />
                </Text>
            </Box>

            {/* layout container */}
            <VStack spacing={16} align="stretch" maxW="1100px" mx="auto">
                {/* Left card (cooling methods) */}
                <MotionBox
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.28 }}
                    textAlign="left"
                    bg="rgba(255,255,255,0.10)"
                    backdropFilter="blur(12px)"
                    border="1px solid rgba(255,255,255,0.12)"
                    boxShadow="0 12px 40px rgba(0,0,0,0.35)"
                    position="relative"
                    overflow="hidden"
                    p={{ base: 5, md: 8 }}
                    borderRadius="2xl"
                    maxW="700px"
                    w="100%"
                    mx={{ base: "auto", md: 0 }}
                    whileHover={{ scale: 1.03, rotate: 0.3, boxShadow: "0 0 40px rgba(91,200,172,0.35)" }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                    sx={{
                        "._sweep": {
                            position: "absolute",
                            top: "-10%",
                            left: "-20%",
                            width: "140%",
                            height: "160%",
                            background: "linear-gradient(120deg, rgba(255,255,255,0.12), transparent)",
                            transform: "translateX(-100%)",
                            transition: "1.1s ease",
                            filter: "blur(10px)",
                            pointerEvents: "none",
                        },
                        ":hover ._sweep": { transform: "translateX(100%)" },
                    }}
                >
                    <Box className="_sweep" aria-hidden />
                    <Heading
                        size="lg"
                        color={thinkICE?.iceYellow ?? "#F9F9A7"}
                        mb={4}
                        display="flex"
                        alignItems="center"
                        gap={4}
                        fontWeight="extrabold"
                        letterSpacing="0.6px"
                        bgGradient="linear(to-r, #F9F9A7, #ffffff)"
                        bgClip="text"
                        textShadow="0 0 18px rgba(249,249,167,0.18)"
                    >
                        <PiDiamondsFourBold color="#F9F9A7" size={44} />
                        <span style={{ display: "inline-block" }}>
                            <AnimatedText text="Teknik Menenangkan Diri" delay={0.02} />
                            <AnimatedText text="(Cooling Down Methods)" delay={0.02} />
                        </span>
                    </Heading>

                    <Text mb={5} color="rgba(255,255,255,0.95)" lineHeight="1.7">
                        <AnimatedText text='Supaya "berpikir dingin" benar-benar bisa diterapkan, tambahkan metode nyata untuk menenangkan diri:' delay={0.12} />
                    </Text>

                    <List spacing={4} pl={2}>
                        <ListItem>
                            <HStack align="start" spacing={4}>
                                <MotionIcon
                                    as={FaCheckCircle}
                                    boxSize={5}
                                    color={thinkICE?.iceYellow ?? "#F9F9A7"}
                                    initial={{ scale: 0.85, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.28 }}
                                />
                                <Text color="white" fontWeight="500" lineHeight="1.6">
                                    <AnimatedText text="Teknik pernapasan (4-7-8 breathing)" delay={0.18} />
                                </Text>
                            </HStack>
                        </ListItem>

                        <ListItem>
                            <HStack align="start" spacing={4}>
                                <MotionIcon
                                    as={FaCheckCircle}
                                    boxSize={5}
                                    color={thinkICE?.iceYellow ?? "#F9F9A7"}
                                    initial={{ scale: 0.85, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.36 }}
                                />
                                <Text color="white" fontWeight="500" lineHeight="1.6">
                                    <AnimatedText text="Mindfulness atau meditasi singkat" delay={0.22} />
                                </Text>
                            </HStack>
                        </ListItem>

                        <ListItem>
                            <HStack align="start" spacing={4}>
                                <MotionIcon
                                    as={FaCheckCircle}
                                    boxSize={5}
                                    color={thinkICE?.iceYellow ?? "#F9F9A7"}
                                    initial={{ scale: 0.85, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.44 }}
                                />
                                <Text color="white" fontWeight="500" lineHeight="1.6">
                                    <AnimatedText text="Menulis masalah sebelum bereaksi" delay={0.26} />
                                </Text>
                            </HStack>
                        </ListItem>
                    </List>
                </MotionBox>

                <MotionBox
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.28 }}
                    textAlign="right"
                    bg="rgba(255,255,255,0.06)"
                    backdropFilter="blur(12px)"
                    border="1px solid rgba(255,255,255,0.10)"
                    boxShadow="0 12px 40px rgba(0,0,0,0.30)"
                    position="relative"
                    overflow="hidden"
                    p={{ base: 5, md: 8 }}
                    borderRadius="2xl"
                    maxW="780px"
                    w="100%"
                    ml="auto"
                    whileHover={{ scale: 1.03, rotate: -0.28, boxShadow: "0 0 48px rgba(0,114,206,0.20)" }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                    sx={{
                        "._sweep": {
                            position: "absolute",
                            top: "-12%",
                            left: "-20%",
                            width: "140%",
                            height: "160%",
                            background: "linear-gradient(120deg, rgba(255,255,255,0.08), transparent)",
                            transform: "translateX(-100%)",
                            transition: "1.1s ease",
                            filter: "blur(8px)",
                            pointerEvents: "none",
                        },
                        ":hover ._sweep": { transform: "translateX(100%)" },
                    }}
                >
                    <Box className="_sweep" aria-hidden />

                    <Heading
                        size="lg"
                        color={thinkICE?.iceYellow ?? "#F9F9A7"}
                        mb={4}
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        gap={4}
                        fontWeight="extrabold"
                        letterSpacing="0.6px"
                        bgGradient="linear(to-r, #F9F9A7, #ffffff)"
                        bgClip="text"
                        textShadow="0 0 18px rgba(249,249,167,0.16)"
                    >
                        <span style={{ display: "inline-block" }}>
                            <AnimatedText text="Prinsip Berpikir Rasional & Objektif" delay={0.02} />
                        </span>
                        <PiDiamondsFourBold color="#F9F9A7" size={40} />
                    </Heading>

                    <Text mb={4} color="rgba(255,255,255,0.95)" lineHeight="1.7">
                        <AnimatedText text="Gunakan prinsip berpikir logis agar tetap objektif dan tidak mudah terbawa emosi:" delay={0.12} />
                    </Text>

                    <List spacing={3} display="inline-block" textAlign="left" pl={2}>
                        <ListItem>
                            <HStack align="start" spacing={4}>
                                <MotionIcon
                                    as={PiPushPinSimpleFill}
                                    boxSize={5}
                                    color="rgba(255,255,255,0.85)"
                                    initial={{ x: 6, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.28 }}
                                />
                                <Text color="white" fontWeight="500" lineHeight="1.6">
                                    <AnimatedText text="Detachment Thinking – Melihat masalah dari sudut pandang orang luar" delay={0.18} />
                                </Text>
                            </HStack>
                        </ListItem>

                        <ListItem>
                            <HStack align="start" spacing={4}>
                                <MotionIcon
                                    as={PiPushPinSimpleFill}
                                    boxSize={5}
                                    color="rgba(255,255,255,0.85)"
                                    initial={{ x: 6, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.36 }}
                                />
                                <Text color="white" fontWeight="500" lineHeight="1.6">
                                    <AnimatedText text="Cost-Benefit Analysis – Menimbang untung-rugi sebelum bertindak" delay={0.22} />
                                </Text>
                            </HStack>
                        </ListItem>

                        <ListItem>
                            <HStack align="start" spacing={4}>
                                <MotionIcon
                                    as={PiPushPinSimpleFill}
                                    boxSize={5}
                                    color="rgba(255,255,255,0.85)"
                                    initial={{ x: 6, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.44 }}
                                />
                                <Text color="white" fontWeight="500" lineHeight="1.6">
                                    <AnimatedText text="Worst-Case Scenario – Mengantisipasi kemungkinan terburuk agar lebih siap" delay={0.26} />
                                </Text>
                            </HStack>
                        </ListItem>
                    </List>
                </MotionBox>

                <MotionBox
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.28 }}
                    textAlign="left"
                    bg="rgba(255,255,255,0.10)"
                    backdropFilter="blur(12px)"
                    border="1px solid rgba(255,255,255,0.12)"
                    boxShadow="0 12px 40px rgba(0,0,0,0.35)"
                    position="relative"
                    overflow="hidden"
                    p={{ base: 5, md: 8 }}
                    borderRadius="2xl"
                    maxW="700px"
                    w="100%"
                    mx={{ base: "auto", md: 0 }}
                    whileHover={{ scale: 1.03, rotate: 0.3, boxShadow: "0 0 40px rgba(91,200,172,0.35)" }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                    sx={{
                        "._sweep": {
                            position: "absolute",
                            top: "-10%",
                            left: "-20%",
                            width: "140%",
                            height: "160%",
                            background: "linear-gradient(120deg, rgba(255,255,255,0.12), transparent)",
                            transform: "translateX(-100%)",
                            transition: "1.1s ease",
                            filter: "blur(10px)",
                            pointerEvents: "none",
                        },
                        ":hover ._sweep": { transform: "translateX(100%)" },
                    }}
                >
                    <Box className="_sweep" aria-hidden />
                    <Heading
                        size="lg"
                        color={thinkICE?.iceYellow ?? "#F9F9A7"}
                        mb={4}
                        display="flex"
                        alignItems="center"
                        gap={4}
                        fontWeight="extrabold"
                        letterSpacing="0.6px"
                        bgGradient="linear(to-r, #F9F9A7, #ffffff)"
                        bgClip="text"
                        textShadow="0 0 18px rgba(249,249,167,0.18)"
                    >
                        <PiDiamondsFourBold color="#F9F9A7" size={44} />
                        <span style={{ display: "inline-block" }}>
                            <AnimatedText text="Contoh Kasus dan Penerapan dalam Kehidupan Nyata" delay={0.02} />
                        </span>
                    </Heading>

                    <Text mb={5} color="rgba(255,255,255,0.95)" lineHeight="1.7">
                        <AnimatedText text="Berikut contoh situasi sehari-hari di mana prinsip Think ICE bisa diterapkan:" delay={0.12} />
                    </Text>

                    <List spacing={4} pl={2}>
                        <ListItem>
                            <HStack align="start" spacing={4}>
                                <MotionIcon
                                    as={FaArrowAltCircleRight}
                                    boxSize={5}
                                    color="rgba(255,255,255,0.92)"
                                    initial={{ x: -8, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.28 }}
                                />
                                <Text color="white" fontWeight="500" lineHeight="1.6">
                                    <AnimatedText text="Saat menghadapi konflik di kantor" delay={0.18} />
                                </Text>
                            </HStack>
                        </ListItem>

                        <ListItem>
                            <HStack align="start" spacing={4}>
                                <MotionIcon
                                    as={FaArrowAltCircleRight}
                                    boxSize={5}
                                    color="rgba(255,255,255,0.92)"
                                    initial={{ x: -8, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.36 }}
                                />
                                <Text color="white" fontWeight="500" lineHeight="1.6">
                                    <AnimatedText text="Dalam pengambilan keputusan bisnis" delay={0.22} />
                                </Text>
                            </HStack>
                        </ListItem>

                        <ListItem>
                            <HStack align="start" spacing={4}>
                                <MotionIcon
                                    as={FaArrowAltCircleRight}
                                    boxSize={5}
                                    color="rgba(255,255,255,0.92)"
                                    initial={{ x: -8, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.44 }}
                                />
                                <Text color="white" fontWeight="500" lineHeight="1.6">
                                    <AnimatedText text="Mengatasi masalah keluarga tanpa emosi berlebihan" delay={0.26} />
                                </Text>
                            </HStack>
                        </ListItem>
                    </List>
                </MotionBox>
            </VStack>
        </Box>
    );
}
