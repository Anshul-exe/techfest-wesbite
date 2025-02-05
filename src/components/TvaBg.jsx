import React from 'react';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3_.png';
import Icon4 from '../assets/icon4.png';
import BranchingTimeline from './Timeline';
import { motion } from 'framer-motion';

const TVABackground = ({ children }) => {
  return (
    <div
      className="relative w-full h-full p-4"
      style={{
        backgroundColor: "#160C0C",
        border: "2px solid #f8861e",
        boxShadow: "0 0 15px #f8861e, 0 0 30px #f8861e",
      }}
    >
      {/* Outer Border */}
      <div
        className="absolute inset-0 border border-[#f8861e]"
        style={{ boxShadow: "0 0 5px #f8861e" }}
      ></div>

      {/* Grid background */}
      <div
        className="absolute inset-0 grid"
        style={{
          backgroundImage:
            "linear-gradient(#1d1d1d 1px, transparent 1px), linear-gradient(90deg, #1d1d1d 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Glitch Timeline Text in Top Right */}
      <div className="absolute top-6 right-8">
        <motion.h1 
          className="glitch-text text-[50px] font-bold"
          style={{ fontFamily: 'Doto, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span aria-hidden="true">TIMELINE</span>
          TIMELINE
          <span aria-hidden="true">TIMELINE</span>
        </motion.h1>
      </div>

      {/* Left Icon Column with PNG Icons and Increased Spacing */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#f8861e]">
        <div className="my-8">
          <img src={Icon1} alt="Icon 1" className="w-10 h-10" />
        </div>
        <div className="my-8">
          <img src={Icon2} alt="Icon 2" className="w-10 h-10" />
        </div>
        <div className="my-8">
          <img src={Icon3} alt="Icon 3" className="w-10 h-10" />
        </div>
        <div className="my-8">
          <img src={Icon4} alt="Icon 4" className="w-10 h-10" />
        </div>
      </div>

      {/* TVA Logo in Bottom Right with Larger Font */}
      <motion.div 
        className="absolute bottom-4 right-4 text-[#f8861e] font-bold text-5xl"
        style={{ fontFamily: 'Doto, sans-serif' }}
      >
        TVA
      </motion.div>

      {/* Content Area */}
      <div className="relative w-full h-full p-8">
        <BranchingTimeline/>
      </div>

      {/* Glitch Effect Styles */}
      <style jsx>{`
        .glitch-text {
          color: #f8861e;
          position: relative;
          text-shadow: 0 0 10px #f8861e;
        }

        .glitch-text span {
          position: absolute;
          top: 0;
          left: 0;
        }

        .glitch-text span:first-of-type {
          animation: glitch 650ms infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-0.025em, -0.0125em);
          opacity: 0.75;
        }

        .glitch-text span:last-of-type {
          animation: glitch 375ms infinite;
          clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
          transform: translate(0.025em, 0.025em);
          opacity: 0.75;
        }

        @keyframes glitch {
          0% {
            text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                         0.025em 0.04em 0 #fffc00;
          }
          15% {
            text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                         0.025em 0.04em 0 #fffc00;
          }
          16% {
            text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                         -0.05em -0.05em 0 #fffc00;
          }
          49% {
            text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                         -0.05em -0.05em 0 #fffc00;
          }
          50% {
            text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                         0 -0.04em 0 #fffc00;
          }
          99% {
            text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                         0 -0.04em 0 #fffc00;
          }
          100% {
            text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
                         -0.04em -0.025em 0 #fffc00;
          }
        }
      `}</style>
    </div>
  );
};

export default TVABackground;