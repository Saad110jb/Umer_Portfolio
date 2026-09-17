import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedLogo } from './AnimatedLogo';
import { ThemeToggle } from './ThemeToggle';
import umerPic from './Umer_pic.jpeg';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/skills-projects', label: 'Systems & Architecture', icon: 'developer_board' },
    { path: '/experience', label: 'Experience', icon: 'work' },
    { path: '/contact', label: 'Contact', icon: 'mail' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'pt-2' : 'pt-3'} px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">

        {/* Left Brand Identity Pill */}
        <Link 
          to="/" 
          className="flex items-center gap-3 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] rounded-full px-4 py-2 group hover:border-blue-400 dark:hover:border-blue-500 transition-all shrink-0"
        >
          <AnimatedLogo size={28} className="shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-heading text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
              Muhammad Umar Farooq
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-tight truncate mt-0.5">
              Delivery Director & Architect
            </span>
          </div>
        </Link>

        {/* Center Floating Capsule Navigation Dock */}
        <nav
          className="hidden lg:flex items-center gap-1 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] border border-slate-200/80 dark:border-slate-800/80 rounded-full px-3 py-1.5"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isHighlighted = hoveredPath ? hoveredPath === item.path : isActive;

            return (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={() => setHoveredPath(item.path)}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors z-10 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isHighlighted && (
                  <motion.div
                    layoutId="magneticNavPill"
                    className="absolute inset-0 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action & Profile Dock */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Animated Sun/Moon Theme Toggle */}
          <ThemeToggle />

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-[#0B375A] hover:bg-[#07243D] text-white font-semibold px-4 py-2 rounded-full shadow-sm transition-all text-xs hover:scale-[1.02] active:scale-[0.98] gap-1.5"
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          
          <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] rounded-full p-1 flex items-center">
            <img
              src={umerPic}
              alt="Muhammad Umar Farooq"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover object-top ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm shrink-0"
            />
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-md text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200/80 dark:border-slate-800/80 shadow-sm shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-lg">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden mt-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 shadow-2xl max-w-7xl mx-auto"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 font-bold pt-1">
                Navigation Menu
              </span>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">{item.icon}</span>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="ml-auto font-mono text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white font-bold">
                        ACTIVE
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 text-white text-center font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-blue-700"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  <span>Initiate Consultation Inquiry</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
