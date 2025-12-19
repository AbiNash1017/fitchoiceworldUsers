'use client';
import React, { useState } from 'react';
import LoadingScreen from './components/landing/LoadingScreen';
import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import Features from './components/landing/Features';
import VendorCTA from './components/landing/VendorCTA';
// import Testimonials from './components/landing/Testimonials';
import Footer from './components/landing/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans scroll-smooth">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div
        className={`transition-all duration-1000 ease-out ${isLoading
            ? 'opacity-0 scale-95 pointer-events-none translate-y-4'
            : 'opacity-100 scale-100 translate-y-0'
          }`}
      >
        <Navbar />
        <Hero />
        <Features />
        <VendorCTA />
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </main>
  );
}