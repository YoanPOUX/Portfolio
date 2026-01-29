import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import FaviconSwitcher from "./components/FaviconSwitcher";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import SkillsPage from "./pages/Skills";
import "./index.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <FaviconSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
      <Footer />
    </div>
  );
} 
