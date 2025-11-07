/* eslint-disable no-unused-vars */
import { Heading, Text, VStack, HStack, List, ListItem, useTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MotionBox } from "../functions/addMotion";
import { FaCheckCircle, FaArrowAltCircleRight } from "react-icons/fa";
import { PiDiamondsFourBold, PiPushPinSimpleFill } from "react-icons/pi";

const AnimatedText = ({ text, delay = 0 }) => {
    const words = text.split(" ");
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.04, delayChildren: delay },
        }),
    };

    const child = {
        hidden: { opacity: 0, y: `0.5em` },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <motion.span variants={container} initial="hidden" animate="visible">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default function ThinkICESections() {
    const theme = useTheme();
    const { thinkICE } = theme.colors;

    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };
    const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <VStack spacing={16} align="stretch" p={8} bg={thinkICE.cobaltBlue} color="white">
            <MotionBox
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                textAlign="left"
                bg={thinkICE.tealDark}
                p={6}
                rounded="2xl"
                shadow="xl"
                maxW="700px"
                w="100%"
            >
                <Heading size="lg" color={thinkICE.iceYellow} mb={4}>
                    <HStack>
                        <PiDiamondsFourBold color="#F9F9A7" size={50} />
                        <AnimatedText text="Teknik Menenangkan Diri (Cooling Down Methods)" />
                    </HStack>
                </Heading>
                <Text mb={4}>
                    <AnimatedText text='Supaya "berpikir dingin" benar-benar bisa diterapkan, tambahkan metode nyata untuk menenangkan diri:' delay={0.2} />
                </Text>
                <List spacing={3} pl={4}>
                    <ListItem>
                        <HStack align="start">
                            <FaCheckCircle color="#F9F9A7" size={20} />
                            <Text>
                                <AnimatedText text="Teknik pernapasan (misalnya 4-7-8 breathing)" delay={0.3} />
                            </Text>
                        </HStack>
                    </ListItem>

                    <ListItem>
                        <HStack align="start">
                            <FaCheckCircle color="#F9F9A7" size={20} />
                            <Text>
                                <AnimatedText text="Mindfulness atau meditasi singkat" delay={0.4} />
                            </Text>
                        </HStack>
                    </ListItem>

                    <ListItem>
                        <HStack align="start">
                            <FaCheckCircle color="#F9F9A7" size={20} />
                            <Text>
                                <AnimatedText text="Menulis masalah sebelum bereaksi" delay={0.5} />
                            </Text>
                        </HStack>
                    </ListItem>
                </List>
            </MotionBox>

            <MotionBox
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                textAlign="right"
                bg={thinkICE.tealDark}
                p={6}
                rounded="2xl"
                shadow="xl"
                maxW="780px"
                w="100%"
                ml="auto"
            >
                <Heading size="lg" color={thinkICE.iceYellow} mb={4}>
                    <HStack>
                        <PiDiamondsFourBold color="#F9F9A7" size={50} />
                        <AnimatedText text="Prinsip Berpikir Rasional & Objektif" />
                    </HStack>
                </Heading>
                <Text mb={4}>
                    <AnimatedText text="Gunakan prinsip berpikir logis agar tetap objektif dan tidak mudah terbawa emosi:" delay={0.2} />
                </Text>
                <List spacing={2} display="inline-block" textAlign="left">
                    <ListItem>
                        <HStack align="start">
                            <PiPushPinSimpleFill />
                            <AnimatedText text="Detachment Thinking – Melihat masalah dari sudut pandang orang luar" delay={0.3} />
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack align="start">
                            <PiPushPinSimpleFill />
                            <AnimatedText text="Cost-Benefit Analysis – Menimbang untung-rugi sebelum bertindak" delay={0.4} />
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack align="start">
                            <PiPushPinSimpleFill />
                            <AnimatedText text="Worst-Case Scenario – Mengantisipasi kemungkinan terburuk agar lebih siap" delay={0.5} />
                        </HStack>
                    </ListItem>
                </List>
            </MotionBox>

            <MotionBox
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                textAlign="left"
                bg={thinkICE.tealDark}
                p={6}
                rounded="2xl"
                shadow="xl"
                maxW="700px"
                w="100%"
            >
                <Heading size="lg" color={thinkICE.iceYellow} mb={4}>
                    <HStack>
                        <PiDiamondsFourBold color="#F9F9A7" size={50} />
                        <AnimatedText text="Contoh Kasus dan Penerapan dalam Kehidupan Nyata" />
                    </HStack>
                </Heading>
                <Text mb={4}>
                    <AnimatedText text="Berikut contoh situasi sehari-hari di mana prinsip Think ICE bisa diterapkan:" delay={0.2} />
                </Text>
                <List spacing={2} pl={4}>
                    <ListItem>
                        <HStack align="start">
                            <FaArrowAltCircleRight />
                            <AnimatedText text="Saat menghadapi konflik di kantor" delay={0.3} />
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack align="start">
                            <FaArrowAltCircleRight />
                            <AnimatedText text="Dalam pengambilan keputusan bisnis" delay={0.4} />
                        </HStack>
                    </ListItem>
                    <ListItem>
                        <HStack align="start">
                            <FaArrowAltCircleRight />
                            <AnimatedText text="Mengatasi masalah keluarga tanpa emosi berlebihan" delay={0.5} />
                        </HStack>
                    </ListItem>
                </List>
            </MotionBox>
        </VStack >
    );
}
