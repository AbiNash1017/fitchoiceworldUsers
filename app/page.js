'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dumbbell, 
  Users, 
  Flame,
  ArrowRight,
  ChevronRight,
  Trophy,
  Target
} from 'lucide-react';

import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import VendorCTA from './components/landing/VendorCTA';
import Footer from './components/landing/Footer';
import LoadingScreen from './components/landing/LoadingScreen';
import Marquee from './components/landing/Marquee';
import BentoFeatures from './components/landing/BentoFeatures';
import WhyFitCoins from './components/landing/WhyFitCoins';
import Features from './components/landing/Features';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <main className="bg-gray-50 min-h-screen font-sans selection:bg-[#DC143C] selection:text-white">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`transition-all duration-1000 ease-out ${isLoading ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <Navbar onOpenDownloadModal={() => setShowDownloadModal(true)} />
        <main>
          <Hero 
            showDownloadModal={showDownloadModal} 
            onCloseDownloadModal={() => setShowDownloadModal(false)} 
          />
          <Marquee />
          <BentoFeatures />
          <WhyFitCoins />
          <Features />
          <VendorCTA />
        </main>
        <Footer />
      </div>
    </main>
  );
}