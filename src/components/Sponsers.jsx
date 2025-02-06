import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Counter from "../components/NumberDaudao";

// Import images
import jdoodleImg from "../assets/jdoodle.jpg";
import reskillImg from "../assets/reskill.jpg";
import interviewBuddyImg from "../assets/interview.jpg";
import axureImg from "../assets/axure.svg";
import unstopImg from "../assets/unstop.svg";
import rosenfeldImg from "../assets/rosenfled.jpg";
import finlaticsImg from "../assets/finlatics.jpg";

const SponsorCard = ({ img, name, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      type: "spring",
      stiffness: 100,
    }}
    className="flex flex-col items-center gap-8"
  >
    <motion.div
      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <img src={img} alt={name} className="w-96 h-28 object-contain" />
    </motion.div>
    <motion.p
      className="text-2xl font-bold text-gray-200 font-['Quicksand']"
      whileHover={{ scale: 1.1 }}
    >
      {name}
    </motion.p>
  </motion.div>
);

const SponsorsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sponsors = [
    { img: jdoodleImg, name: "JDoodle" },
    { img: reskillImg, name: "Reskilll" },
    { img: interviewBuddyImg, name: "InterviewBuddy" },
    { img: axureImg, name: "Axure" },
    { img: unstopImg, name: "UnStop" },
    { img: rosenfeldImg, name: "Rosenfeld" },
    { img: finlaticsImg, name: "Finlatics" },
  ];

  return (
    <motion.div
      ref={ref}
      className="min-h-screen p-12 relative overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, #000000, #1a1a1a, #000000)",
        backgroundSize: "400% 400%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        className="text-5xl font-extrabold text-center text-white mb-24"
        style={{ fontFamily: "Recursive, sans-serif" }}
      >
        OUR SPONSORS
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20 max-w-7xl mx-auto">
        {sponsors.slice(0, 4).map((sponsor, index) => (
          <SponsorCard
            key={sponsor.name}
            {...sponsor}
            index={index}
            inView={isInView}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20 max-w-6xl mx-auto mt-20">
        {sponsors.slice(4).map((sponsor, index) => (
          <SponsorCard
            key={sponsor.name}
            {...sponsor}
            index={index + 4}
            inView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SponsorsGrid;
