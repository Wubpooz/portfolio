import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
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
  const location = useLocation()

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      {location.pathname === "/" ? <PhysicsDotsBackground /> : null}
      <Navbar />
      <div className="relative z-10 flex flex-1 flex-col bg-background/0 text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FooterSection />
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname, hash, key } = useLocation()
  const navigationType = useNavigationType()
  const scrollPositions = useRef<Record<string, number>>({})

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[key] = window.scrollY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [key])

  useEffect(() => {
    const htmlElement = document.documentElement
    const originalScrollBehavior = htmlElement.style.scrollBehavior
    htmlElement.style.scrollBehavior = "auto"

    let isRestoring = false

    if (navigationType === "POP") {
      const savedPosition = scrollPositions.current[key]
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition)
        isRestoring = true
      }
    }

    if (!isRestoring) {
      if (!hash) {
        window.scrollTo(0, 0)
      } else {
        const id = hash.replace("#", "")
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "auto" })
        }
      }
    }

    const timeoutId = setTimeout(() => {
      htmlElement.style.scrollBehavior = originalScrollBehavior
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [pathname, hash, key, navigationType])

  return null
}

function AppShell() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Seo />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:bg-muted focus:px-4 focus:py-2 focus:text-foreground"
      >
        Skip to content
      </a>
      <App />
    </BrowserRouter>
  )
}

export default AppShell;