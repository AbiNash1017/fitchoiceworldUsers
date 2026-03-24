'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { APP_LINKS } from '@/app/constants';

const AppDownloadModal = ({ isOpen, onClose, isAbsolute = false, position = 'center' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`${isAbsolute ? 'absolute inset-0' : 'fixed inset-0'} z-[200] flex ${position === 'top' ? 'items-start pt-20 md:pt-32' : 'items-center'} justify-center p-4 overflow-hidden`}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-sm z-[210] bg-white border border-gray-100 shadow-[0_32px_128px_-12px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-8 overflow-visible`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 p-3 rounded-full bg-white hover:bg-gray-50 transition-all text-gray-500 hover:text-black shadow-xl hover:scale-110 active:scale-90 z-[220]"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-2">
                Download Fykli App
              </h2>
              <p className="text-gray-600 text-sm mb-8 font-medium">
                Your ultimate fitness & sports companion is just a tap away.
              </p>

              <div className="flex flex-col gap-4">
                {/* App Store */}
                <a
                  href={APP_LINKS.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-[1.02] active:scale-95 duration-200"
                >
                  <img 
                    src="/images/appstore.png" 
                    alt="App Store" 
                    className="w-full h-auto object-contain" 
                  />
                </a>

                {/* Play Store */}
                <a
                  href={APP_LINKS.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-[1.02] active:scale-95 duration-200"
                >
                  <img 
                    src="/images/playstore.png" 
                    alt="Play Store" 
                    className="w-full h-auto object-contain" 
                  />
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em]">
                  Fit Choice World • {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AppDownloadModal;
