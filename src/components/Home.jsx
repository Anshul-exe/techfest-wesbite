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
      style={{ WebkitTextStroke: "3px white" }}
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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.5 }}
      >
        <div className="w-80 h-80 bg-[#E50000] rounded-full blur-3xl opacity-100" />
      </motion.div>
      <div className="relative min-h-screen flex items-center justify-center">
        <motion.div
          className="absolute left-[1200px] top-0 w-max h-full overflow-hidden hidden md:block"
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
          className="absolute right-[1250px] top-[100px] w-max h-full overflow-hidden hidden md:block"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full transform scale-x-[-1]">
            <img src={SpiderWeb} className="w-full h-full" alt="Spider Web" />
          </div>
        </motion.div>
        <div className="relative z-10 flex flex-col items-center text-center -mt-32">
          <motion.h1
            className="text-[100px] font-bold leading-none mb-4 text-6xl md:text-[200px] sm:text-[150px] xs:text-[100px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          >
            {"GL!TCH".split("").map((letter, index) => (
              <GlitchLetter key={index}>{letter}</GlitchLetter>
            ))}
          </motion.h1>
          <motion.h2
            className="text-[40px] font-['doto'] tracking-[0.5em] mb-12 text-2xl md:text-[40px] sm:text-[24px] xs:text-[18px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            NO WAY HOME
          </motion.h2>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
          <div className="relative">
            <motion.div
              className="absolute left-8 bottom-16 max-w-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm font-['Doto'] leading-relaxed">
                Glitch Tech Fest 2024 stands as an unparalleled opportunity for
                students to flaunt their technical acumen amid a dynamic milieu
                of peers and industry luminaries.
              </p>
            </motion.div>
            <motion.button
              className="absolute right-24 bottom-16 font-['doto'] font-bold bg-white text-black px-6 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={scrollToTimeline}
            >
              GO SEE TIMELINE
            </motion.button>
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
