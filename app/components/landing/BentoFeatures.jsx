'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dumbbell,
  Users,
  Flame,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

// Interactive gallery card
const MiniGalleryCard = () => {
  const [index, setIndex] = useState(0);
  const images = [
    { src: "/images/Premium Strength Zones.jfif", label: "Premium Strength Zones" },
    { src: "/images/Professional Sports Courts.jpg", label: "Professional Sports Courts" },
    { src: "/images/yoga.avif", label: "Zen & Flow: Soulful Yoga Sessions" },
    { src: "/images/zumba.png", label: "Pulse & Rhythm: High-Energy Zumba" },
    { src: "/images/Combat & MMA Arenas.avif", label: "Combat & MMA Arenas" },
    { src: "/images/Olympic Swimming Pools.jpeg", label: "Olympic Swimming Pools" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="md:col-span-2 rounded-[2rem] bg-[#111] overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
    >
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].label}
          initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)", zIndex: 1 }}
          exit={{ opacity: 0, x: -60, filter: "blur(8px)", zIndex: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none"></div>

      {/* Progress Indicators */}
      <div className="absolute top-6 right-6 flex gap-2 z-20">
        {images.map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-brand-primary' : 'w-1.5 bg-white/50'}`} />
        ))}
      </div>

      <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 flex justify-between items-center shadow-lg transform translate-y-2 opacity-95 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <div className="overflow-hidden">
          <h4 className="text-xl font-bold text-black">15+ Sports & Facilities</h4>
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-sm text-gray-600 mt-1 font-medium"
            >
              {images[index].label}
            </motion.p>
          </AnimatePresence>
        </div>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "var(--brand-primary)" }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-colors shrink-0 ml-4"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

// Bento Box Features
const BentoFeatures = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter">
            Transform Your Routine with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Smart Fitness</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">

          {/* Card 1: Large Image Feature */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="md:col-span-2 rounded-[2rem] bg-[#111] overflow-hidden relative group flex flex-col justify-end p-8 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
          >
            <img
              src="/images/Pay Per Slot.jfif"
              alt="Gym"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white mb-4"
              >
                <Dumbbell size={24} />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-2 transform group-hover:translate-x-2 transition-transform duration-300">Pay Per Slot</h3>
              <p className="text-gray-300 max-w-md transform group-hover:translate-x-2 transition-transform duration-300 delay-75">No subscriptions. Book any fitness center or studio, pay only for your slot, and work out on your terms.</p>
            </div>
          </motion.div>

          {/* Card 2: Social/Fitgram */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            className="rounded-[2rem] bg-white border border-gray-200 p-8 flex flex-col shadow-sm hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-auto z-10">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white"
              >
                <Flame size={24} />
              </motion.div>

              <div className="relative w-32 h-24">
                <div className="absolute right-0 top-2 w-16 h-20 rounded-xl overflow-hidden border-2 border-white shadow-md transform rotate-6 group-hover:rotate-12 group-hover:translate-x-2 group-hover:-translate-y-1 transition-all duration-500">
                  <img src="/images/fitgram2.jfif" alt="Run" className="w-full h-full object-cover" />
                </div>
                <div className="absolute right-8 top-0 w-16 h-20 rounded-xl overflow-hidden border-2 border-white shadow-lg transform -rotate-3 group-hover:-rotate-6 group-hover:-translate-x-2 group-hover:scale-105 transition-all duration-500 z-10">
                  <img src="/images/fitgram1.jfif" alt="Yoga" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-brand-primary transition-colors">Fitgram</h3>
              <p className="text-gray-600 text-sm mb-6">Join the community. Share your progress, follow athletes, and stay motivated every single day.</p>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider border border-brand-primary/20">
                Coming Soon
              </div>
            </div>

            {/* Background images for texture */}
            <img
              src="/images/landing_hero.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.12] group-hover:opacity-[0.2] transition-opacity duration-700 pointer-events-none"
            />

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tl from-red-100 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          </motion.div>

          {/* Card 3: RTP Matchmaking */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            className="rounded-[2rem] bg-[#111] p-8 flex flex-col relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl"
          >
            <img
              src="/images/rtpcard.jpg"
              alt="People having a good time playing sports"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-90 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            <motion.div
              whileHover={{ rotate: -15, scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white mb-auto relative z-10"
            >
              <Users size={24} />
            </motion.div>
            <div className="relative z-10 mt-12">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Ready To Play (RTP)</h3>
              <p className="text-gray-300 text-sm">Post games, find local players, and book turfs instantly for Football, Cricket, and more.</p>
            </div>
          </motion.div>

          <MiniGalleryCard />

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
