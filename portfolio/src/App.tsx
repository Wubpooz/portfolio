import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import FooterSection from "@/components/layout/Footer";
import Home from './pages/Home';
import ResumePage from './pages/Resume';
import Seo from './components/Seo';
import ProjectsPage from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <Seo />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[--surface] focus:px-4 focus:py-2 focus:text-[--text]"
      >
        Skip to content
      </a>
      <Navbar />
      <div className="flex flex-col justify-space-between h-full bg-[--background] text-[--on-background]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;