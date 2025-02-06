import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import GlitchHomepage from "./Home";
import AboutSection from "./Aboutus";
import BranchingTimeline from "./Timeline";
import HoverCards from "./Card";
import TVABackground from "./TvaBg";
import EyeOfAgamotto from "./EyeOfAgamotto";
import SponsorsGrid from "./Sponsers";
import Footer from "./Footer";
import FAQ from "./Faq";
import Counter from "./NumberDaudao";
// Progress Indicator SVG
const ProgressIndicator = ({ progress }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className="absolute top-1/2 -translate-y-1/2 md:w-24 md:h-24"
    style={{ left: `${progress * 100}%`, transform: `translate(-50%, -50%)` }}
  >
    <motion.circle
      cx="12"
      cy="12"
      r="8"
      stroke="#EF4444"
      strokeWidth="2"
      fill="black"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="4"
      fill="#EF4444"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.1 }}
    />
  </svg>
);

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 md:h-1 bg-gray-800 z-50">
      <motion.div
        className="absolute top-0 left-0 right-0 h-full bg-red-500 origin-left"
        style={{ scaleX }}
      />
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
      >
        <ProgressIndicator progress={scrollYProgress} />
      </motion.div>
    </div>
  );
};

const ScrollLock = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return children;
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id, path) => {
    navigate(path);
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const navItems = [
    { name: "Home", path: "/", id: "home" },
    { name: "About us", path: "/about", id: "about" },
    { name: "Sacred TimeLine", path: "/timeline", id: "timeline" },
    { name: "Our events", path: "/events", id: "events" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 md:py-6 bg-black/50 backdrop-blur-sm mt-1"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ fontFamily: "Doto, sans-serif" }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection("home", "/")}
          className="text-2xl md:text-3xl font-extrabold text-white hover:text-red-500 transition-colors tracking-widest"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontFamily: "Doto, sans-serif", letterSpacing: "3px" }}
        >
          Glitch
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.path}
              onClick={() => scrollToSection(item.id, item.path)}
              className={`text-white font-semibold hover:font-bold hover:text-red-500 transition-colors tracking-wider ${
                location.pathname === item.path ? "text-red-500 font-bold" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontFamily: "Doto, sans-serif",
                letterSpacing: "1.5px",
                fontSize: "1.15rem",
              }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.path}
                  onClick={() => scrollToSection(item.id, item.path)}
                  className={`text-white font-semibold hover:font-bold hover:text-red-500 transition-colors tracking-wider text-left ${
                    location.pathname === item.path
                      ? "text-red-500 font-bold"
                      : ""
                  }`}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    fontFamily: "Doto, sans-serif",
                    letterSpacing: "1.5px",
                  }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const MainContent = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const element = document.getElementById("home");
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }
    setIsLoading(false);
  }, [location]);

  if (isLoading) {
    return (
      <ScrollLock>
        <div className="fixed inset-0 bg-black flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-red-500 text-2xl">Loading...</div>
          </motion.div>
        </div>
      </ScrollLock>
    );
  }

  return (
    <div className="min-h-screen bg-black snap-y snap-mandatory overflow-y-auto">
      <section id="home" className="min-h-screen snap-start pt-16 md:pt-24">
        <GlitchHomepage />
      </section>
      <section
        id="about"
        className="min-h-screen snap-start pt-16 md:pt-24 flex items-center justify-center px-4 md:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          <AboutSection className="w-full md:w-1/2" />
          <EyeOfAgamotto className="w-full md:w-1/2 mt-8 md:mt-0" />
        </div>
      </section>

      <section id="timeline" className="min-h-screen snap-start pt-16 md:pt-24">
        <TVABackground />
      </section>

      <section id="events" className="min-h-screen snap-start pt-16 md:pt-24">
        <HoverCards />
      </section>

      <section id="sponsor" className="min-h-screen snap-start pt-16 md:pt-24">
        <SponsorsGrid />
      </section>

      <hr />
      <section id="FAQ" className="snap-start pt-16 md:pt-24">
        <FAQ />
      </section>
      <hr />

      <section id="footer" className="snap-start pt-16 md:pt-24">
        <Footer />
      </section>
    </div>
  );
};

const Layout = () => {
  return (
    <BrowserRouter>
      <ProgressBar />
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <MainContent />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
