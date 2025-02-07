import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Space404 = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const numberVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
        duration: 0.3,
      },
    },
  };

  const starVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#1a1b2e] via-[#252842] to-[#1a1b2e] flex flex-col justify-center items-center font-['Ubuntu'] relative overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            variants={starVariants}
            animate="animate"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center gap-8 mb-12">
        <motion.span
          className="text-[20em] font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
          variants={numberVariants}
        >
          4
        </motion.span>

        <motion.div
          className="w-[250px] h-[250px] rounded-full border-8 border-purple-500 flex items-center justify-center bg-[#1a1b2e] shadow-[0_0_25px_rgba(139,92,246,0.5)] z-10"
          animate={{
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 6, repeat: Infinity, ease: "linear" },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <img
            src={logo}
            alt="Glitch Logo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.span
          className="text-[20em] font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
          variants={numberVariants}
        >
          4
        </motion.span>
      </div>

      {/* Error Message */}
      <motion.div
        className="text-center mb-12 relative"
        variants={textVariants}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-3">
          404 Error
        </h1>
        <h2 className="text-2xl font-bold text-white mb-2 text-opacity-90">
          Page not found
        </h2>
        <p className="text-gray-400">
          Sorry, the page you are looking for doesn't exist.
        </p>
      </motion.div>

      {/* Animated Button */}
      <motion.a
        href="/"
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full 
                  text-xl font-semibold relative overflow-hidden group"
        variants={buttonVariants}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Take Me Home</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-purple-500 opacity-50 blur-xl transform scale-150"></div>
      </motion.a>

      {/* Additional Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
    </motion.div>
  );
};

export default Space404;
