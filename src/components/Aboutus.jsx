import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  useEffect(() => {
    document.body.style.scrollSnapType = "y mandatory";
    return () => {
      document.body.style.scrollSnapType = "";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <motion.section
      className="bg-black/50 h-full snap-start flex justify-center items-center py-16 px-4"
      style={{ scrollSnapAlign: 'start', fontFamily: 'Doto, sans-serif' }}
    >
      <motion.div
        className="flex flex-col items-start justify-start gap-8 max-w-screen-xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="font-light text-gray-500 sm:text-xl dark:text-gray-400 w-full">
          <motion.h1
            className="mb-6 text-7xl tracking-tight font-extrabold text-white"
            variants={titleVariants}
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
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
