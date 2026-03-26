'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOGO_URL } from '@/app/constants';
const Navbar = ({ onOpenDownloadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="fixed top-4 sm:top-6 left-0 right-0 mx-auto z-50 w-full sm:w-[95%] max-w-6xl px-4 sm:px-0"
      >
        <div className="bg-white/95 backdrop-blur-xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-4 py-2 flex justify-between items-center hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-shadow duration-500">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 pl-2 cursor-pointer z-50">
            <img src={LOGO_URL} alt="Fykli Logo" className="w-8 h-8 object-contain" />
            <div className="flex items-baseline gap-1 sm:gap-1.5 flex-nowrap">
              <span className="text-lg md:text-xl font-bold text-black group-hover:text-brand-primary transition-colors">
                Fykli
              </span>
              <span className="text-[9px] sm:text-sm font-medium tracking-tight opacity-60 text-black">
                - Fit Choice World
              </span>
            </div>
          </Link>
  
          {/* Desktop Links - Pill style */}
          <div className="hidden md:flex items-center bg-gray-100/80 border border-gray-200/50 rounded-full p-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                    isActive 
                      ? 'bg-white text-black shadow-sm border border-gray-200/50' 
                      : 'text-gray-500 hover:text-black hover:bg-white/50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
  
          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={onOpenDownloadModal}
              className="px-5 py-2 rounded-full bg-brand-primary hover:bg-brand-accent text-white text-sm font-bold shadow-[0_4px_14px_rgba(161,45,51,0.3)] cursor-pointer transition-all flex items-center gap-2"
            >
              Get App <ArrowRight size={16} />
            </button>
          </div>
  
          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-black z-50 pr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
  
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute top-20 left-0 w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col items-center gap-6 z-40"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className={`text-2xl font-bold cursor-pointer transition-colors text-center ${
                      isActive ? 'text-brand-primary' : 'text-black hover:text-brand-primary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="h-px w-full bg-gray-100 my-2"></div>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownloadModal();
                }}
                className="w-full py-4 rounded-full bg-brand-primary text-white font-bold text-lg text-center"
              >
                Download App
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
