import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedLogo } from './AnimatedLogo';

export const LogoLoader: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Trigger swift micro-loader animation on route change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750); // Fast 750ms non-blocking duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const easeConstruct: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="logo-loader-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 0.98,
            transition: { duration: 0.25, ease: easeConstruct } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-lg pointer-events-none select-none"
        >
          {/* Central Animated Monogram */}
          <div className="relative flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeConstruct }}
            >
              <AnimatedLogo size={80} interactive={false} />
            </motion.div>

            {/* Subtle Brand Title & Progress Shimmer */}
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="font-heading text-sm font-bold text-white tracking-tight">
                Muhammad Umar Farooq
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-blue-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping inline-block" />
                <span>Loading Enterprise Workspace...</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
