import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import iceImage from '../assets/ice-blue-tr.png';
import { motion } from "framer-motion";
import { MotionBox, MotionText, MotionHeading, MotionImage } from '../functions/addMotion'

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export default function Jumbotron() {
    return (
        <Box bg="thinkICE.cobaltBlue" px={{ base: 4, md: 16 }} py={{ base: 10, md: 24 }} color="white">
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="space-between"
                gap={10}
                as={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <MotionBox maxW="xl" variants={containerVariants}>
                    <MotionText fontSize="md" color="#5FFFD6" fontWeight="bold" variants={itemVariants}>
                        From my creation
                    </MotionText>

                    <MotionHeading
                        fontSize={{ base: '3xl', md: '5xl' }}
                        mt={4}
                        lineHeight="short"
                        variants={itemVariants}
                    >
                        <Text as="span" color="white">
                            Think ICE<br />
                        </Text>
                        <Text as="span" color="#00FFB2">
                            “A thinking method as cold and as clear as ice.”
                        </Text>
                    </MotionHeading>

                    <MotionText fontSize="lg" mt={4} color="gray.100" variants={itemVariants}>
                        From the beginning to scaling. We are your marketing partners who will make your
                        <Text as="span" fontWeight="bold" color="white">
                            {' '}startup or veteran clinic
                        </Text>{' '}
                        stand out.
                    </MotionText>

                    <MotionText mt={4} color="#5FFFD6" fontWeight="bold" variants={itemVariants}>
                        Based in DIFFERENTIATION and UNIQUENESS
                    </MotionText>
                </MotionBox>

                <MotionImage
                    src={iceImage}
                    alt="ICE"
                    maxW="400px"
                    borderRadius="lg"
                    variants={itemVariants}
                    className="hover:cursor-pointer transform hover:scale-120"
                />
            </Flex>
        </Box>
    );
}
