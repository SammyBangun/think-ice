/* eslint-disable no-unused-vars */

import { Box } from "@chakra-ui/react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

export default function IceCube() {
    const rotate = useMotionValue(0)
    const y = useMotionValue(0)

    useEffect(() => {
        const controls = animate(rotate, 360, {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
        })

        const float = animate(y, [0, -30, 0], {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        })

        return () => {
            controls.stop()
            float.stop()
        }
    }, [rotate, y])

    const transformStyle = useTransform(
        [rotate, y],
        ([r, ty]) => `translateY(${ty}px) rotateX(${r}deg) rotateY(${r}deg)`
    )

    return (
        <Box
            bg="thinkICE.cobaltBlue"
            display="flex"
            alignItems="center"
            justifyContent="center"
            py={20}
            w="full"
        >
            <motion.div className="cube" style={{ transform: transformStyle }}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </motion.div>
            <StyleSheet />
        </Box>
    )
}

function StyleSheet() {
    return (
        <style>{`
      .cube {
        width: 200px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d;
      }

      .side {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: radial-gradient(
          circle at 30% 30%,
          rgba(180, 220, 255, 0.6),
          rgba(120, 180, 255, 0.2)
        );
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(8px);
        border-radius: 8px;
      }

      .front  { transform: rotateY(0deg) translateZ(100px); }
      .right  { transform: rotateY(90deg) translateZ(100px); }
      .back   { transform: rotateY(180deg) translateZ(100px); }
      .left   { transform: rotateY(-90deg) translateZ(100px); }
      .top    { transform: rotateX(90deg) translateZ(100px); }
      .bottom { transform: rotateX(-90deg) translateZ(100px); }
    `}</style>
    )
}
