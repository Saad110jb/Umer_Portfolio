import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LogoLoader } from './components/LogoLoader';
import { PageTransition } from './components/PageTransition';
import { CursorSpotlight } from './components/CursorSpotlight';
import Home from './pages/Home';
import { ContactPage } from './pages/ContactPage';
import { SkillsProjectsPage } from './pages/SkillsProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface text-on-surface flex flex-col font-sans antialiased relative">
        <CursorSpotlight />
        <LogoLoader />
        <Navbar />
        <main className="flex-1 w-full">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/skills-projects" element={<SkillsProjectsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
