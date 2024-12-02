import { motion } from "motion/react";

export const PulseCircles = () => {
  return (
    <motion.div
      className="absolute bottom-6 h-60 w-60 rounded-full bg-[#FA00FF] blur-3xl"
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.8, 0.5, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    />
  );
};
