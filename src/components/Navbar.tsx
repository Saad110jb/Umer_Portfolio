import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedLogo } from './AnimatedLogo';
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-container-lowest/95 backdrop-blur-lg shadow-md border-b border-surface-container-high'
          : 'bg-surface-container-lowest/80 backdrop-blur-sm border-b border-surface-container-high/40'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        
        {/* Brand Monogram & Title */}
        <Link to="/" className="flex items-center gap-3 group">
          <AnimatedLogo size={36} className="shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-heading text-sm sm:text-base font-bold text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors truncate">
              Muhammad Umar Farooq
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-outline font-medium mt-1 truncate">
              Delivery Director & Architect
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Magnetic Pill */}
        <nav
          className="hidden lg:flex items-center gap-1 p-1 bg-surface-container-low/60 rounded-full border border-surface-container-high/60"
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
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors z-10 ${
                  isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {isHighlighted && (
                  <motion.div
                    layoutId="magneticNavPill"
                    className="absolute inset-0 rounded-full bg-surface-container-highest border border-primary/20 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop & Mobile Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-primary-container text-on-primary font-semibold px-3.5 py-2 rounded-xl shadow-sm hover:bg-primary transition-all text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in Touch
          </Link>
          <img
            src={umerPic}
            alt="Muhammad Umar Farooq"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover object-top ring-2 ring-surface-container-high shadow-sm shrink-0"
          />

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors border border-surface-container-high shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-xl">
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
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-surface-container-high px-4 pt-2 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-2 max-w-7xl mx-auto">
              <span className="font-mono text-[10px] uppercase tracking-wider text-outline px-3 font-bold pt-2">
                Navigation Menu
              </span>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-primary-container text-on-primary shadow-sm'
                        : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="ml-auto font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-bold">
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
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white text-center font-bold text-xs flex items-center justify-center gap-2 shadow-md"
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
