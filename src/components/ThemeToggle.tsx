import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div 
      className={`inline-flex items-center p-1 rounded-full bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700/80 backdrop-blur-md shadow-inner select-none ${className}`}
      role="radiogroup"
      aria-label="Theme selector"
    >
      {/* LIGHT MODE SEGMENT */}
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-checked={!isDark}
        role="radio"
        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
          !isDark
            ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="Switch to Light Theme"
      >
        <svg
          className="w-3.5 h-3.5 fill-current text-amber-500"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>Light</span>
      </button>

      {/* DARK MODE SEGMENT */}
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-checked={isDark}
        role="radio"
        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
          isDark
            ? 'bg-blue-600 text-white shadow-md ring-1 ring-blue-500'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="Switch to Dark Theme"
      >
        <svg
          className="w-3.5 h-3.5 fill-current text-sky-300"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-5.4-5.4c0-1.81.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z" />
        </svg>
        <span>Dark</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
