// Layout.jsx
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import GlitchHomepage from "./Home";
import AboutSection from "./Aboutus";
import BranchingTimeline from "./Timeline";
import HoverCards from "./Card";
import FootFallCounter from "./FootFall";

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/50 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-white">
          Glitch
        </Link>
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className={`text-white hover:text-red-500 transition-colors ${
              location.pathname === "/" ? "text-red-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white hover:text-red-500 transition-colors ${
              location.pathname === "/about" ? "text-red-500" : ""
            }`}
          >
            About us
          </Link>
          <Link
            to="/timeline"
            className={`text-white hover:text-red-500 transition-colors ${
              location.pathname === "/timeline" ? "text-red-500" : ""
            }`}
          >
            Past Events
          </Link>
          <Link
            to="/sponsors"
            className={`text-white hover:text-red-500 transition-colors ${
              location.pathname === "/sponsors" ? "text-red-500" : ""
            }`}
          >
            Sponsors
          </Link>
          <Search className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors text-white" />
        </div>
      </div>
    </motion.nav>
  );
};

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<GlitchHomepage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/timeline" element={<BranchingTimeline />} />
          <Route path="/sponsors" element={<HoverCards />} />
          <Route path="/foot" element={<FootFallCounter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
