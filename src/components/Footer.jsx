import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import glitchLogo from "../assets/image.png";

const Footer = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const glitchAnimation = {
    hidden: { skew: 0 },
    visible: {
      skew: [-2, 2, -2, 0],
      x: [-2, 2, -2, 0],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const scrollToSection = (id) => {
    navigate(`/${id}`);
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
    <div className="relative bg-black overflow-hidden py-8">
      {/* Reduced padding to py-8 */}
      {/* Background Logo */}
      <motion.img
        src={glitchLogo}
        alt=""
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[300px] opacity-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.footer
        className="relative text-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Description Section */}
            <motion.div
              className="md:col-span-6 space-y-6"
              variants={itemVariants}
            >
              <div className="flex flex-col gap-4">
                <motion.h2
                  className="text-4xl font-bold tracking-wider bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
                  variants={glitchAnimation}
                  whileHover={{
                    textShadow: [
                      "0 0 10px #FF1493",
                      "2px 2px 10px #FF1493",
                      "-2px -2px 10px #FF1493",
                      "0 0 10px #FF1493",
                    ],
                    transition: {
                      duration: 0.2,
                      repeat: Infinity,
                    },
                  }}
                >
                  GLITCH
                </motion.h2>
                <motion.div
                  className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500"
                  whileHover={{ width: "100%", transition: { duration: 0.3 } }}
                />
              </div>
              <motion.p
                className="text-gray-400 max-w-lg text-lg"
                variants={itemVariants}
              >
                Embrace Imperfections, Elevate Innovation. An insight into
                Gautam Buddha University's biggest annual tech fest.
              </motion.p>
            </motion.div>

            {/* Links Sections */}
            <div className="md:col-span-6 grid grid-cols-2 gap-8">
              {/* Useful Links */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-white text-xl font-semibold relative">
                  USEFUL LINKS
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-pink-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </h3>
                <ul className="space-y-3">
                  {["About Us", "Hackathon", "Events"].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        onClick={() =>
                          item === "About Us"
                            ? scrollToSection("about")
                            : item === "Events"
                              ? scrollToSection("events")
                              : null
                        }
                        className="text-white hover:text-pink-500 transition-colors relative group"
                      >
                        <span className="relative z-10">{item}</span>
                        <motion.span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300" />
                      </button>
                    </motion.li>
                  ))}
                  {/* Contact link */}
                  <motion.li
                    key="Contact"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="https://linktr.ee/Anurag_Rawal_04"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-pink-500 transition-colors relative group"
                    >
                      <span className="relative z-10">Contact</span>
                      <motion.span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300" />
                    </a>
                  </motion.li>
                </ul>
              </motion.div>

              {/* Other Resources */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-white text-xl font-semibold relative">
                  OTHER RESOURCES
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </h3>
                <ul className="space-y-3">
                  {[
                    "Demographics",
                    "Terms & Conditions",
                    "Previous Events",
                  ].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="hover:text-purple-500 transition-colors relative group"
                      >
                        <span className="relative z-10">{item}</span>
                        <motion.span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Copyright Section */}
          <motion.div
            className="mt-8 pt-6 border-t border-gray-800 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-500">
              © {new Date().getFullYear()} GLITCH. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
