import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutSection = ({ component }) => {
  useEffect(() => {
    document.body.style.scrollSnapType = 'y mandatory';
    return () => {
      document.body.style.scrollSnapType = '';
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const glowVariants = {
    animate: {
      textShadow: [
        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073",
        "0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6",
        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      className="bg-black/50 h-screen snap-start"
      style={{ scrollSnapAlign: 'start', fontFamily: 'Doto, sans-serif' }}
    >
      <motion.div 
        className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 h-full flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          <motion.h1 
            className="mb-6 text-7xl tracking-tight font-extrabold text-white"
            variants={titleVariants}
            animate="animate"
          >
            About us
          </motion.h1>
          
          <motion.p 
            className="mb-6 text-2xl font-semibold text-white"
            variants={textVariants}
            whileHover={{ scale: 1.01 }}
          >
            Glitch Tech Fest 2024 stands as an unparalleled opportunity for students 
            to flaunt their technical acumen amid a dynamic milieu of peers and 
            industry luminaries. With a rich tapestry of events spanning diverse 
            technological domains, participants engage in live interactions and 
            networking, cultivating invaluable connections essential for future 
            career trajectories. This convergence of talent not only fosters 
            personal growth but also offers a fertile ground for forging lasting 
            professional relationships, ensuring a transformative experience for 
            all involved.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 gap-6 mt-8"
          variants={containerVariants}
        >
          <component/>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;