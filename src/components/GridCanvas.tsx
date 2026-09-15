import React from 'react';

export const GridCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-gradient-to-b from-[#F0F5FF] via-[#F8FAFC] to-[#EFF6FF] dark:from-[#05070A] dark:via-[#090D16] dark:to-[#0A0E1A] transition-colors duration-300">
      {/* Light Mode Precision Hairline Technical Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] opacity-35 dark:opacity-0 transition-opacity duration-300 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_80%,transparent_100%)]" 
      />
      
      {/* Dark Mode Precision Hairline Technical Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-0 dark:opacity-40 transition-opacity duration-300 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_80%,transparent_100%)]" 
      />

      {/* Multi-Point Ambient Blue Mesh Glow Layers Across Whole Web */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-blue-600/18 via-indigo-500/12 to-transparent dark:from-sky-500/20 dark:via-blue-600/15 blur-3xl" />
      
      <div className="absolute -top-20 -left-20 w-[700px] h-[700px] bg-gradient-to-br from-blue-500/20 via-sky-400/15 to-transparent dark:from-blue-600/25 dark:via-indigo-500/20 rounded-full blur-3xl" />
      
      <div className="absolute top-[30%] -right-32 w-[750px] h-[750px] bg-gradient-to-bl from-blue-600/15 via-sky-500/12 to-emerald-500/8 dark:from-sky-500/18 dark:via-indigo-500/15 rounded-full blur-3xl" />
      
      <div className="absolute top-[55%] -left-32 w-[650px] h-[650px] bg-gradient-to-tr from-blue-600/16 via-indigo-600/12 to-transparent dark:from-blue-500/20 dark:via-indigo-600/15 rounded-full blur-3xl" />
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-t from-blue-600/18 via-indigo-500/10 to-transparent dark:from-sky-600/20 dark:via-indigo-500/12 blur-3xl" />
    </div>
  );
};

export default GridCanvas;
