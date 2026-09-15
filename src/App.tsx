import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LayoutWrapper } from './components/LayoutWrapper';
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
    <ThemeProvider>
      <BrowserRouter>
        <CursorSpotlight />
        <LogoLoader />
        <LayoutWrapper>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/skills-projects" element={<SkillsProjectsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </PageTransition>
        </LayoutWrapper>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
