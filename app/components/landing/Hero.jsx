'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, MapPin } from 'lucide-react';
import AppleIcon from '@mui/icons-material/Apple';
import { HERO_SLIDES, APP_LINKS } from '@/app/constants';
import AppDownloadModal from './AppDownloadModal';

const Hero = ({ showDownloadModal, onCloseDownloadModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-24 pb-8 px-4 md:px-8 bg-gray-50 h-screen min-h-[700px] flex flex-col items-center justify-center">
      <div className="relative w-full max-w-7xl h-full rounded-[2.5rem] overflow-hidden shadow-2xl group">

        {/* Carousel Images */}
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={HERO_SLIDES[currentIndex].image}
            alt="Hero Background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>

        {/* Now Live Badge - Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-8 right-8 z-30 flex items-center gap-2 px-5 py-2 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300"
        >
          <MapPin className="w-3.5 h-3.5 text-orange-500" />
          <span className="text-[10px] md:text-xs font-bold tracking-wider text-white uppercase whitespace-nowrap">
            Live in <span className="text-orange-400">Mysuru & Bengaluru</span>
          </span>
        </motion.div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pt-10">

          <motion.div
            key={`badge-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.5 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] md:text-xs font-bold mb-6 uppercase tracking-[0.2em]"
          >
            {HERO_SLIDES[currentIndex].badge}
          </motion.div>

          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter max-w-4xl"
          >
            {HERO_SLIDES[currentIndex].title}
          </motion.h1>

          <motion.p
            key={`sub-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-gray-200 text-lg md:text-xl mt-6 max-w-2xl"
          >
            {HERO_SLIDES[currentIndex].subtitle}
          </motion.p>

          {/* Preserve Existing Get App Section */}
          <div id="download-app" className="flex flex-col sm:flex-row gap-5 pt-8 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-forwards">
            <a
              href={APP_LINKS.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all hover:scale-[1.05] active:scale-95 duration-200 shadow-2xl hover:shadow-white/20"
            >
              <AppleIcon className="!text-3xl transition-transform group-hover:-translate-y-0.5" />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">Download on the</div>
                <div className="text-lg font-bold leading-none">App Store</div>
              </div>
            </a>

            <a
              href={APP_LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-2xl hover:brightness-110 transition-all hover:scale-[1.05] active:scale-95 duration-200 shadow-2xl hover:shadow-brand-accent/40"
            >
              <Play className="w-7 h-7 fill-white ml-1 transition-transform group-hover:translate-x-0.5" />
              <div className="text-left ml-1">
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Get it on</div>
                <div className="text-lg font-bold leading-none">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-brand-primary' : 'w-2 bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>

        <AppDownloadModal
          isOpen={showDownloadModal}
          onClose={onCloseDownloadModal}
          isAbsolute={true}
        />
      </div>
    </section>
  );
};

export default Hero;
