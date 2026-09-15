import React from 'react';
import { Navbar } from './Navbar';
import { GridCanvas } from './GridCanvas';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased relative transition-colors duration-300">
      <GridCanvas />
      <Navbar />
      <main className="flex-1 w-full relative z-10 pt-4">
        {children}
      </main>
    </div>
  );
};

export default LayoutWrapper;
