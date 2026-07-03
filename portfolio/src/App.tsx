import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import FooterSection from "@/components/layout/Footer";
import Home from './pages/Home';
import ResumePage from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="flex flex-col justify-space-between h-full bg-[--background] text-[--on-background]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <FooterSection />
      </main>
    </BrowserRouter>
  );
}

export default App;