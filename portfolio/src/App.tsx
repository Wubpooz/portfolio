// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import FooterSection from "@/components/layout/Footer";
import Home from './pages/Home';
import ResumePage from './pages/Resume';
import Seo from './components/Seo';
import ProjectsPage from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetail';
import NotFoundPage from './pages/NotFound';
import {
  // BackgroundContext,
  // type BackgroundType,
  // BackgroundSwitcher,
  // WarpedGridBackground,
  // FlowFieldBackground,
  PhysicsDotsBackground
} from './components/shared/backgrounds';

// Background management with context
// function ActiveBackground() {
//   const [bg, setBg] = useState<BackgroundType>(() => {
//     const saved = localStorage.getItem("portfolio-background");
//     return (saved as BackgroundType) || "grid";
//   });

//   const setActiveBackground = (type: BackgroundType) => {
//     setBg(type);
//     localStorage.setItem("portfolio-background", type);
//   };

//   return (
//     <BackgroundContext.Provider value={{ activeBackground: bg, setActiveBackground }}>
//       {bg === "grid" && <WarpedGridBackground />}
//       {bg === "flow" && <FlowFieldBackground />}
//       {bg === "dots" && <PhysicsDotsBackground />}
//       <BackgroundSwitcher />
//     </BackgroundContext.Provider>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Seo />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:bg-muted focus:px-4 focus:py-2 focus:text-foreground"
      >
        Skip to content
      </a>
      <div className="fixed inset-0 -z-20 bg-background transition-colors duration-300" />
      <PhysicsDotsBackground />
      <Navbar />
      <div className="flex flex-col justify-space-between h-full bg-background/0 text-foreground relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;