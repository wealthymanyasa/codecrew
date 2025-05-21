
import { useEffect, useState } from 'react';

// Simple fade in hook for elements
export const useFadeIn = (delay = 0) => {
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);
  
  return {
    style: {
      opacity,
      transition: 'opacity 0.6s ease-in-out',
    },
  };
};

// Track when element is in viewport
export const useInViewport = (ref: React.RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  
  return isInView;
};

// Generate random movement for particles
export const getRandomMovement = () => {
  return {
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
    duration: 3 + Math.random() * 6
  };
};
