import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
      <motion.div
        className="z-50 fixed w-3 h-3 bg-white rounded-full pointer-events-none shadow-lg shadow-white/50"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 1,
        }}
      />
  );
}