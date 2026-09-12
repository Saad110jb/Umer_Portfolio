import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  size?: number;
  className?: string;
  interactive?: boolean;
  onAnimationComplete?: () => void;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = 48,
  className = '',
  interactive = true,
  onAnimationComplete,
}) => {
  // Explicit cubic-bezier tuple type for Framer Motion easing
  const easeConstruct: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        whileHover={interactive ? { scale: 1.05, rotate: 1 } : undefined}
        transition={{ duration: 0.2 }}
        onAnimationComplete={onAnimationComplete}
      >
        <defs>
          {/* Royal Blue Primary Gradient */}
          <linearGradient id="uf-primary-grad" x1="30" y1="30" x2="170" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          {/* Midnight Navy Shadow Bevel Gradient */}
          <linearGradient id="uf-navy-grad" x1="30" y1="120" x2="140" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#0A192F" />
          </linearGradient>

          {/* Sky Blue Highlight Gradient */}
          <linearGradient id="uf-highlight-grad" x1="40" y1="40" x2="160" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          {/* Diagonal Light Gleam Shimmer Mask */}
          <linearGradient id="uf-gleam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="40%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.85" />
            <stop offset="60%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* LAYER 1: 3D MIDNIGHT NAVY BEVELS & SHADOW FACETS */}
        <motion.path
          d="M 30 40 L 44 40 L 44 122 L 30 136 Z"
          fill="url(#uf-navy-grad)"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.3, delay: 0.15, ease: easeConstruct }}
        />

        <motion.path
          d="M 30 136 L 80 172 L 80 156 L 44 122 Z"
          fill="#0A192F"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: easeConstruct }}
        />

        <motion.path
          d="M 80 172 L 110 144 L 110 126 L 80 156 Z"
          fill="#0F172A"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25, ease: easeConstruct }}
        />

        <motion.path
          d="M 110 126 L 110 162 L 126 162 L 126 126 Z"
          fill="#0A192F"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: easeConstruct }}
        />

        <motion.path
          d="M 170 40 L 170 64 L 158 64 L 158 52 Z"
          fill="#0F172A"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.35 }}
        />

        {/* LAYER 2: ROYAL BLUE & SKY BLUE FRONT FACE PLATES */}
        <motion.path
          d="M 44 40 L 66 40 L 66 110 L 44 122 Z"
          fill="url(#uf-primary-grad)"
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 0.35, delay: 0.2, ease: easeConstruct }}
        />

        <motion.path
          d="M 44 122 L 80 146 L 90 132 L 66 110 Z"
          fill="url(#uf-primary-grad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.28, ease: easeConstruct }}
        />

        <motion.path
          d="M 90 132 L 110 118 L 110 64 L 140 40 L 170 40 L 140 64 L 110 88 L 110 126 L 80 156 L 90 132 Z"
          fill="url(#uf-primary-grad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: easeConstruct }}
        />

        <motion.path
          d="M 90 64 L 120 40 L 170 40 L 140 64 Z"
          fill="url(#uf-highlight-grad)"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.35, ease: easeConstruct }}
        />

        <motion.path
          d="M 110 88 L 160 88 L 146 104 L 110 104 Z"
          fill="url(#uf-primary-grad)"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4, ease: easeConstruct }}
        />

        <motion.path
          d="M 110 126 L 126 126 L 126 162 L 110 162 Z"
          fill="url(#uf-highlight-grad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.42 }}
        />

        {/* LAYER 3: WIREFRAME STROKE DRAW */}
        <motion.path
          d="M 30 40 L 44 40 L 66 40 L 120 40 L 170 40 L 170 64 L 146 104 L 160 88 M 30 40 L 30 136 L 80 172 L 110 144 L 110 162 L 126 162 M 66 110 L 80 146 L 110 126"
          stroke="#60A5FA"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1, opacity: [1, 1, 0] }}
          transition={{ duration: 0.5, ease: easeConstruct }}
        />

        {/* LAYER 4: LIGHT GLEAM / SCANLINE SWEEP SHIMMER */}
        <motion.rect
          x="0"
          y="0"
          width="200"
          height="200"
          fill="url(#uf-gleam-grad)"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: ['-100%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeInOut' }}
          style={{ mixBlendMode: 'overlay', pointerEvents: 'none' }}
        />
      </motion.svg>
    </div>
  );
};
