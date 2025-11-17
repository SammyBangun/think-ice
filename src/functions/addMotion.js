import { Box, Button, Heading, Text, Image, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionIcon = motion(Icon);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionButton = motion(Button);

export {
  MotionBox,
  MotionText,
  MotionHeading,
  MotionImage,
  MotionButton,
  MotionIcon,
};
