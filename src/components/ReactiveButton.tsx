import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ReactiveButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'default' | 'secondary' | 'primary';
  onClick?: () => void;
  className?: string;
}

const ReactiveButton: React.FC<ReactiveButtonProps> = ({
  children,
  icon,
  variant = 'default',
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define colors based on variant
  let bgColor = 'bg-codecrew-purple';
  let hoverBgColor = 'bg-codecrew-purple/90';
  let textColor = 'text-white';
  
  if (variant === 'secondary') {
    bgColor = 'bg-transparent';
    hoverBgColor = 'bg-codecrew-purple/10';
    textColor = 'text-foreground';
  }

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-lg ${variant === 'primary' ? 'bg-codecrew-purple' : 'bg-codecrew-purple/40'}`}
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ 
          opacity: isHovered ? 0.7 : 0, 
          filter: 'blur(16px)',
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Button content */}
      <Button
        onClick={onClick}
        className={`relative h-12 px-8 text-base font-medium rounded-lg transition-all duration-300 border-2 ${
          variant === 'secondary' 
            ? 'border-foreground/20 hover:border-codecrew-purple hover:text-codecrew-purple' 
            : 'border-transparent'
        } ${bgColor} hover:${hoverBgColor} ${textColor} z-10`}
      >
        <span className="relative flex items-center justify-center gap-2">
          {icon && <span className="mr-1">{icon}</span>}
          {children}
          
          {/* Animated arrow/particles on hover */}
          {isHovered && (
            <motion.span
              className="absolute right-0 translate-x-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          )}
        </span>
      </Button>
    </motion.div>
  );
};

export default ReactiveButton;
