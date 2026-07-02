import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import FooterSection from "@/components/layout/Footer";
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="flex flex-col justify-space-between h-full bg-[--background] text-[--on-background]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterSection />
      </main>
    </BrowserRouter>
  );
}

export default App;