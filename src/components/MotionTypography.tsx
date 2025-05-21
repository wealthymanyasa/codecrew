import React from 'react';
import { motion } from 'framer-motion';

interface MotionTypographyProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const MotionTypography: React.FC<MotionTypographyProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.05
}) => {
  // Split text into array of characters
  const characters = Array.from(text);

  // Variants for container
  const containerVariants = {
    hidden: {},
    visible: (i = 1) => ({
      transition: { staggerChildren: duration, delayChildren: delay * i }
    }),
  };

  // Variants for each character
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {characters.map((character, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block"
        >
          {character === ' ' ? '\u00A0' : character}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default MotionTypography;
