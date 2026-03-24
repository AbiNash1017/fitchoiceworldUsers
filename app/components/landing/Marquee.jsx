'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Trophy, Target } from 'lucide-react';
import { FITNESS_FACILITIES, SPORTS_FACILITIES } from '@/app/constants';

const Marquee = () => {
  return (
    <div className="py-16 bg-white overflow-hidden border-y border-gray-100 relative flex flex-col gap-4">
      
      {/* Abstract Outline SVG Art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-around opacity-[0.06] z-0 px-4 md:px-10">
        <motion.div 
          animate={{ y: [-15, 15, -15], rotate: [-5, 5, -5] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Dumbbell className="w-56 h-56 md:w-80 md:h-80 text-black" strokeWidth={1.5} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [15, -15, 15], scale: [0.95, 1.05, 0.95] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block"
        >
          <Trophy className="w-64 h-64 md:w-96 md:h-96 text-black" strokeWidth={1.5} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [-10, 10, -10], rotate: [5, -5, 5] }} 
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <Target className="w-56 h-56 md:w-80 md:h-80 text-black" strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      
      {/* Row 1 - Fitness */}
      <div className="flex whitespace-nowrap overflow-hidden relative z-20">
        <motion.div 
          className="flex gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {[...FITNESS_FACILITIES, ...FITNESS_FACILITIES].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-default">
              <span className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400 uppercase tracking-tighter group-hover:from-brand-primary group-hover:to-brand-accent transition-all duration-300">
                {item}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300 group-hover:bg-brand-primary transition-colors"></span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Sports */}
      <div className="flex whitespace-nowrap overflow-hidden relative z-20">
        <motion.div 
          className="flex gap-8 items-center"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {[...SPORTS_FACILITIES, ...SPORTS_FACILITIES].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-default">
              <span className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400 uppercase tracking-tighter group-hover:from-brand-primary group-hover:to-brand-accent transition-all duration-300">
                {item}
              </span>
              <div className={`w-2 h-2 rounded-full mx-8 group-hover:bg-brand-primary transition-colors ${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
