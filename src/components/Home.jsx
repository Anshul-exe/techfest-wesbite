import React from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SpiderWeb from '/src/assets/spider-web-svgrepo-com.svg';

const GlitchLetter = ({ children }) => {
  return (
    <motion.span
      className="relative inline-block text-transparent"
      style={{ WebkitTextStroke: '2px white' }}
      whileHover={{
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
    </div>
  );
};

const GlitchHomepage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      <motion.nav 
        className="absolute top-0 left-0 right-0 z-10 px-8 py-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-2xl font-bold">Glitch</div>
          <div className="flex items-center space-x-8">
            <a href="#" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#" className="hover:text-red-500 transition-colors">About us</a>
            <a href="#" className="hover:text-red-500 transition-colors">Past Events</a>
            <a href="#" className="hover:text-red-500 transition-colors">Sponsors</a>
            <Search className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors" />
          </div>
        </div>
      </motion.nav>


      <div className="relative min-h-screen flex items-center justify-center">

        <motion.div 
          className="absolute left-0 top-0 w-1/2 h-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full transform -translate-x-1/2 pad">
            <img src={SpiderWeb} className="w-full h-full" alt="Spider Web" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute right-0 top-0 w-1/2 h-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full transform translate-x-1/2 px-8 scale-x-[-1]">
            <img src={SpiderWeb} className="w-full h-full" alt="Spider Web" />
          </div>
        </motion.div>


        <div className="relative z-10 flex flex-col items-center">

          <motion.h1 
            className="text-[160px] font-bold leading-none mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {'GLITCH'.split('').map((letter, index) => (
              <GlitchLetter key={index}>{letter}</GlitchLetter>
            ))}
            
          </motion.h1>


          <motion.h2 
            className="text-2xl tracking-[0.5em] mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            NOW WAY HOME
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
              <p className="text-sm leading-relaxed">
                No Way Home premiered at the Fox Village Theatre in Hollywood, Los Angeles, on
                December 13, 2021, and was theatrically released in the United States on December 17.
              </p>
            </motion.div>


            <motion.button 
              className="absolute right-24 bottom-16 bg-white text-black px-6 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
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