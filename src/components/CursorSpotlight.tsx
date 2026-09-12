import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorSpotlight: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const springX = useSpring(-1000, { stiffness: 250, damping: 30 });
  const springY = useSpring(-1000, { stiffness: 250, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) setIsHovered(true);
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, springX, springY]);

  if (!isHovered) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Interactive Radial Spotlight */}
      <motion.div
        aria-hidden="true"
        className="absolute rounded-full"
        style={{
          x: springX,
          y: springY,
          width: '600px',
          height: '600px',
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, rgba(37, 99, 235, 0.015) 45%, transparent 70%)',
        }}
      />

      {/* Subtle Architectural Dot Matrix Grid Drift */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" 
      />
    </div>
  );
};
