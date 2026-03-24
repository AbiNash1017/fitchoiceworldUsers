'use client';
import React from 'react';
import { X, ArrowLeft, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const PolicyLayout = ({ title, lastUpdated, children }) => {
    const router = useRouter();

    const handleClose = () => {
        // Go back in history if possible, otherwise go to home
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push('/');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-brand-primary/10 selection:text-brand-primary">
            
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Main Content Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white/70 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.08)] relative"
                >
                    
                    {/* Header Section */}
                    <div className="relative h-48 md:h-64 flex items-end p-8 md:p-12 overflow-hidden border-b border-gray-100/50">
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
                        <div className="absolute top-0 right-0 p-6 flex gap-4">
                            <button
                                onClick={handleClose}
                                className="p-3 rounded-2xl bg-white/50 backdrop-blur-md text-gray-500 hover:text-gray-900 border border-white transition-all hover:bg-white/80 hover:scale-105 active:scale-95 group shadow-sm"
                                title="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="relative z-10 w-full">
                            <motion.h1 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tighter"
                            >
                                {title}
                            </motion.h1>
                            
                            {lastUpdated && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 w-fit backdrop-blur-md shadow-sm"
                                >
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-50"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-widest flex items-center gap-1.5">
                                        <Clock className="w-3 h-3 text-brand-primary" />
                                        Updated: {lastUpdated}
                                    </span>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="px-8 py-10 md:px-16 md:py-20">
                        <div className="space-y-12 text-base md:text-lg text-gray-600 leading-relaxed
                            [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-black [&_h2]:text-gray-900 [&_h2]:mb-6 [&_h2]:mt-16 [&_h2]:tracking-tight [&_h2]:first:mt-0
                            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mb-4 [&_h3]:mt-10
                            [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:mb-3 [&_h4]:mt-8
                            [&_p]:mb-6 [&_p]:opacity-90
                            [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-4 [&_ul]:mb-8
                            [&_ul_li]:flex [&_ul_li]:before:content-['•'] [&_ul_li]:before:text-brand-primary [&_ul_li]:before:mr-4 [&_ul_li]:before:text-xl [&_ul_li]:before:font-bold
                            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-4 [&_ol]:mb-8
                            [&_strong]:text-gray-900 [&_strong]:font-bold
                            [&_a]:text-brand-primary [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-brand-primary/30 [&_a]:hover:decoration-brand-primary [&_a]:transition-all">
                            {children}
                        </div>

                        {/* Footer / Back link */}
                        <div className="mt-24 pt-10 border-t border-gray-100/50 flex justify-center md:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.02, x: -5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleClose}
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-50/50 hover:bg-gray-100/80 text-gray-600 hover:text-gray-900 font-bold transition-all border border-gray-200 shadow-sm group"
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-brand-primary" />
                                Return to Previous
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
                
                {/* Bottom Decorative Text */}
                <div className="mt-8 text-center opacity-40 text-gray-400 text-xs font-bold uppercase tracking-widest select-none">
                    © {new Date().getFullYear()} Fit Choice World • All Rights Reserved
                </div>
            </div>
        </div>
    );
};

export default PolicyLayout;

