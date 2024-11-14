// Home.jsx
import React from "react";
import {
  Search,
  ChevronDown,
  ChevronRight,
  BrainCircuitIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import SpiderWeb from "/src/assets/spider-web.svg";
import { useNavigate } from "react-router-dom";

const scrollToTimeline = () => {
  document.getElementById("timeline").scrollIntoView({ behavior: "smooth" });
};

const GlitchLetter = ({ children }) => {
  return (
    <motion.span
      className="relative inline-block text-transparent"
      style={{ WebkitTextStroke: "2px white" }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.5 }}
      whileHover={{
        scale: 1.05,
        color: "#FFFFFF",
      }}
    >
      {children}
    </motion.span>
  );
};

const GlitchHomepage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden pt-20">
      {/* Circle with Red Blur */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.5 }}
      >
        <div className="w-80 h-80 bg-[#E50000] rounded-full blur-3xl opacity-100" />
      </motion.div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Spider Webs */}
        <motion.div
          className="absolute left-[1200px] top-0 right- w-max h-full overflow-hidden"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full">
            <img
              src={SpiderWeb}
              className="w-full h-full right-100"
              alt="Spider Web"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute right-[1250px] top-[100px] w-max h-full overflow-hidden"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full transform scale-x-[-1]">
            <img src={SpiderWeb} className="w-full h-full" alt="Spider Web" />
          </div>
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Main Title */}
          <motion.h1
            className="text-[300px] font-bold leading-none mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          >
            {"GLITCH".split("").map((letter, index) => (
              <GlitchLetter key={index}>{letter}</GlitchLetter>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-2xl tracking-[0.5em] mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            NO WAY HOME
          </motion.h2>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
          <div className="relative">
            {/* Description */}
            <motion.div
              className="absolute left-8 bottom-16 max-w-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm leading-relaxed">
                No Way Home premiered at the Fox Village Theatre in Hollywood,
                Los Angeles, on December 13, 2021, and was theatrically released
                in the United States on December 17.
              </p>
            </motion.div>

            {/* Timeline Button */}
            <motion.button
              className="absolute right-24 bottom-16 bg-white text-black px-6 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={scrollToTimeline}
            >
              GO SEE TIMELINE
            </motion.button>

            {/* Navigation Dots */}
            <motion.div
              className="absolute right-8 bottom-0 flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="w-8 h-8 bg-red-600 rounded-full cursor-pointer flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <ChevronDown className="w-5 h-5 text-white" />
              </motion.div>

              <motion.div
                className="w-8 h-8 bg-yellow-400 rounded-full cursor-pointer flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlitchHomepage;
