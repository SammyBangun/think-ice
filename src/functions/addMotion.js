import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionButton = motion(Button);

export { MotionBox, MotionText, MotionHeading, MotionImage, MotionButton };
