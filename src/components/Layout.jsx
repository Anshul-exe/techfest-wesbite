import React, { useEffect, useRef } from "react";
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
<<<<<<< HEAD
import EyeOfAgamotto from "./EyeOfAgamotto";
=======
import Footer from "./Footer";

>>>>>>> be71618f699621b6beb3bb187cd9061407bc5e5d
// Progress Indicator SVG
const ProgressIndicator = ({ progress }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="absolute top-1/2 -translate-y-1/2"
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

// Enhanced Progress Bar Component
const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
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

// Scroll Lock Component
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

  const scrollToSection = (id, path) => {
    navigate(path);
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

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 px-8 py-6 bg-black/50 backdrop-blur-sm mt-1"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ fontFamily: 'Doto, sans-serif' }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.button
          onClick={() => scrollToSection("home", "/")}
          className="text-2xl font-bold text-white hover:text-red-500 transition-colors tracking-wider"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontFamily: 'Doto, sans-serif', letterSpacing: '2px' }}
        >
          Glitch
        </motion.button>
        <div className="flex items-center space-x-8">
          {[
            { name: "Home", path: "/", id: "home" },
            { name: "About us", path: "/about", id: "about" },
<<<<<<< HEAD
            { name: "Sacred TimeLine", path: "/timeline", id: "timeline" },
            { name: "Our events", path: "/sponsors", id: "sponsors" }
=======
            { name: "Past Events", path: "/timeline", id: "timeline" },
            { name: "Sponsors", path: "/sponsors", id: "sponsors" },
>>>>>>> be71618f699621b6beb3bb187cd9061407bc5e5d
          ].map((item) => (
            <motion.button
              key={item.path}
              onClick={() => scrollToSection(item.id, item.path)}
              className={`text-white hover:text-red-500 transition-colors tracking-wide ${
                location.pathname === item.path ? "text-red-500" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                fontFamily: 'Doto, sans-serif',
                letterSpacing: '1px',
                fontSize: '1.05rem'
              }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};


const MainContent = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const location = useLocation();

  useEffect(() => {
    // Ensure home page is visible first
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
            {/* Add your loading animation here */}
            <div className="text-red-500 text-2xl">Loading...</div>
          </motion.div>
        </div>
      </ScrollLock>
    );
  }

  return (
    <div className="min-h-screen bg-black snap-y snap-mandatory overflow-y-auto">
      <section id="home" className="min-h-screen snap-start pt-24">
        <GlitchHomepage />
      </section>

<<<<<<< HEAD
      <section 
        id="about" 
        className="min-h-screen snap-start pt-24"
      >
        <AboutSection><EyeOfAgamotto/></AboutSection>
=======
      <section id="about" className="min-h-screen snap-start pt-24">
        <AboutSection />
>>>>>>> be71618f699621b6beb3bb187cd9061407bc5e5d
      </section>

      <section id="timeline" className="min-h-screen snap-start pt-24">
        <TVABackground />
      </section>

      <section id="sponsors" className="min-h-screen snap-start pt-24">
        <HoverCards />
      </section>

      <section id="footer" className="min-h-screen snap-start pt-24">
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
