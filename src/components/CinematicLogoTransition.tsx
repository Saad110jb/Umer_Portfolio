import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const CinematicLogoTransition: React.FC = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const { isDark } = useTheme();
  const [phase, setPhase] = useState<'assembling' | 'freeze' | 'zoom' | 'complete'>('assembling');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reset loader state on route change or initial mount
    setIsVisible(true);
    setPhase('assembling');

    if (shouldReduceMotion) {
      // Instant 200ms crossfade for reduced motion accessibility
      const reducedTimer = setTimeout(() => {
        setIsVisible(false);
        setPhase('complete');
      }, 200);
      return () => clearTimeout(reducedTimer);
    }

    // Timeline Architecture (~1050ms Total Duration)
    // 0ms - 650ms: Wireframe Assembly & Facet Lock + 45-deg Specular Sheen Sweep
    // 650ms - 750ms: Peak Assembly Freeze & Micro-Settle Bounce (scale 1.02 -> 1.0)
    // 750ms - 1050ms: 32x Explosive Camera Zoom-In & Curtain Punch-Through

    const freezeTimer = setTimeout(() => {
      setPhase('freeze');
    }, 650);

    const zoomTimer = setTimeout(() => {
      setPhase('zoom');
    }, 750);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setPhase('complete');
    }, 1050);

    return () => {
      clearTimeout(freezeTimer);
      clearTimeout(zoomTimer);
      clearTimeout(completeTimer);
    };
  }, [location.pathname, shouldReduceMotion]);

  // Framer Motion easing profiles
  const easeConstruct: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const cubicPunchThroughEase: [number, number, number, number] = [0.85, 0, 0.15, 1];

  if (!isVisible) return null;

  // Theme-Dependent Palette Logic
  const canvasBg = isDark ? 'bg-[#090D16]' : 'bg-[#F9F8F6]';
  const gridColor = isDark ? '#334155' : '#CBD5E1';
  const strokeWireframe = isDark ? '#38BDF8' : '#60A5FA';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={`cinematic-loader-${location.pathname}-${isDark ? 'dark' : 'light'}`}
          initial={{ opacity: 1 }}
          animate={{
            opacity: phase === 'zoom' ? [1, 1, 0] : 1,
          }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={
            shouldReduceMotion
              ? { duration: 0.2 }
              : {
                  opacity: { duration: 0.3, delay: phase === 'zoom' ? 0.15 : 0, ease: 'easeOut' },
                }
          }
          className={`fixed inset-0 z-[9999] flex items-center justify-center ${canvasBg} pointer-events-none select-none overflow-hidden transition-colors duration-300`}
          style={{
            willChange: 'opacity, transform',
          }}
        >
          {/* Architectural Background Micro-Grid Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="loader-theme-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke={gridColor} strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#loader-theme-grid)" />
            </svg>
          </div>

          {/* Ambient Specular Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: phase === 'zoom' ? 0 : isDark ? [0, 0.8, 0.6] : [0, 0.6, 0.4],
              scale: phase === 'zoom' ? 3.5 : 1,
            }}
            transition={{ duration: 0.65, ease: easeConstruct }}
            className={`absolute w-[550px] h-[550px] rounded-full blur-3xl pointer-events-none ${
              isDark
                ? 'bg-gradient-to-tr from-sky-500/35 via-blue-600/30 to-indigo-600/25'
                : 'bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-sky-400/20'
            }`}
          />

          {/* Central Monogram Container with 32x Camera Zoom Punch-Through */}
          <motion.div
            initial={{ scale: shouldReduceMotion ? 1 : 0.85, opacity: shouldReduceMotion ? 1 : 0 }}
            animate={
              shouldReduceMotion
                ? { scale: 1, opacity: 1 }
                : phase === 'assembling'
                ? { scale: 1.02, opacity: 1 }
                : phase === 'freeze'
                ? { scale: 1.0, opacity: 1 }
                : {
                    scale: 32,
                    opacity: [1, 1, 0],
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : phase === 'assembling'
                ? { duration: 0.65, ease: easeConstruct }
                : phase === 'freeze'
                ? { duration: 0.1, ease: 'easeOut' }
                : {
                    scale: { duration: 0.3, ease: cubicPunchThroughEase },
                    opacity: { duration: 0.3, times: [0, 0.7, 1], ease: 'linear' },
                  }
            }
            className="relative flex items-center justify-center"
            style={{
              transformOrigin: 'center center',
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              filter: isDark ? 'drop-shadow(0 0 24px rgba(56, 189, 248, 0.35))' : 'none',
            }}
          >
            {/* SVG Geometric Isometric "UF" Monogram */}
            <svg
              width="180"
              height="180"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              <defs>
                {/* Facet Gradient (Light vs Dark) */}
                <linearGradient id="theme-facing-grad" x1="30" y1="30" x2="170" y2="170" gradientUnits="userSpaceOnUse">
                  {isDark ? (
                    <>
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="50%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </>
                  ) : (
                    <>
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </>
                  )}
                </linearGradient>

                {/* Bevel Track Gradient (Light vs Dark) */}
                <linearGradient id="theme-bevel-grad" x1="30" y1="120" x2="140" y2="170" gradientUnits="userSpaceOnUse">
                  {isDark ? (
                    <>
                      <stop offset="0%" stopColor="#0F172A" />
                      <stop offset="100%" stopColor="#020617" />
                    </>
                  ) : (
                    <>
                      <stop offset="0%" stopColor="#0F172A" />
                      <stop offset="100%" stopColor="#0A192F" />
                    </>
                  )}
                </linearGradient>

                {/* Highlight Facet Gradient */}
                <linearGradient id="theme-sky-highlight" x1="40" y1="40" x2="160" y2="60" gradientUnits="userSpaceOnUse">
                  {isDark ? (
                    <>
                      <stop offset="0%" stopColor="#7DD3FC" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </>
                  ) : (
                    <>
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </>
                  )}
                </linearGradient>

                {/* 45-Degree Specular Sheen Sweep Gradient */}
                <linearGradient id="theme-sheen-sweep" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="40%" stopColor="white" stopOpacity="0" />
                  <stop offset="50%" stopColor="white" stopOpacity={isDark ? "0.95" : "0.85"} />
                  <stop offset="60%" stopColor="white" stopOpacity="0" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* BEVEL TRACKS & DEPTH GROOVES */}
              <motion.path
                d="M 30 40 L 44 40 L 44 122 L 30 136 Z"
                fill="url(#theme-bevel-grad)"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.35, delay: 0.1, ease: easeConstruct }}
              />

              <motion.path
                d="M 30 136 L 80 172 L 80 156 L 44 122 Z"
                fill={isDark ? "#020617" : "#0A192F"}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15, ease: easeConstruct }}
              />

              <motion.path
                d="M 80 172 L 110 144 L 110 126 L 80 156 Z"
                fill={isDark ? "#090D16" : "#0F172A"}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2, ease: easeConstruct }}
              />

              <motion.path
                d="M 110 126 L 110 162 L 126 162 L 126 126 Z"
                fill={isDark ? "#020617" : "#0A192F"}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.35, delay: 0.25, ease: easeConstruct }}
              />

              <motion.path
                d="M 170 40 L 170 64 L 158 64 L 158 52 Z"
                fill={isDark ? "#090D16" : "#0F172A"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.3 }}
              />

              {/* FRONT FACING LETTER PLATES */}
              <motion.path
                d="M 44 40 L 66 40 L 66 110 L 44 122 Z"
                fill="url(#theme-facing-grad)"
                initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                transition={{ duration: 0.4, delay: 0.15, ease: easeConstruct }}
              />

              <motion.path
                d="M 44 122 L 80 146 L 90 132 L 66 110 Z"
                fill="url(#theme-facing-grad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.22, ease: easeConstruct }}
              />

              <motion.path
                d="M 90 132 L 110 118 L 110 64 L 140 40 L 170 40 L 140 64 L 110 88 L 110 126 L 80 156 L 90 132 Z"
                fill="url(#theme-facing-grad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.25, ease: easeConstruct }}
              />

              <motion.path
                d="M 90 64 L 120 40 L 170 40 L 140 64 Z"
                fill="url(#theme-sky-highlight)"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.3, ease: easeConstruct }}
              />

              <motion.path
                d="M 110 88 L 160 88 L 146 104 L 110 104 Z"
                fill="url(#theme-facing-grad)"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.32, ease: easeConstruct }}
              />

              <motion.path
                d="M 110 126 L 126 126 L 126 162 L 110 162 Z"
                fill="url(#theme-sky-highlight)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.35 }}
              />

              {/* WIREFRAME FAST STROKE DRAW */}
              <motion.path
                d="M 30 40 L 44 40 L 66 40 L 120 40 L 170 40 L 170 64 L 146 104 L 160 88 M 30 40 L 30 136 L 80 172 L 110 144 L 110 162 L 126 162 M 66 110 L 80 146 L 110 126"
                stroke={strokeWireframe}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 1 }}
                animate={{ pathLength: 1, opacity: [1, 1, 0] }}
                transition={{ duration: 0.55, ease: easeConstruct }}
              />

              {/* 45-DEGREE SPECULAR SHEEN SWEEP */}
              {!shouldReduceMotion && (
                <motion.rect
                  x="0"
                  y="0"
                  width="200"
                  height="200"
                  fill="url(#theme-sheen-sweep)"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: ['-100%', '100%'], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.45, delay: 0.45, ease: 'easeInOut' }}
                  style={{ mixBlendMode: 'overlay', pointerEvents: 'none' }}
                />
              )}
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicLogoTransition;
