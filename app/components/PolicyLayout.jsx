'use client';
import React from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f14] py-8 md:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                {/* Main Content Card */}
                <div className="bg-white dark:bg-[#111827] shadow-2xl shadow-gray-200/50 dark:shadow-none rounded-[2rem] border border-gray-100 dark:border-gray-800 overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-700 relative">

                    {/* Sticky Close Button Container */}
                    <div className="sticky top-0 z-30 flex justify-end p-4 md:p-6 pointer-events-none">
                        <button
                            onClick={handleClose}
                            className="pointer-events-auto p-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 shadow-xl border border-gray-200 dark:border-gray-800 transition-all hover:scale-110 active:scale-95 group"
                            title="Close and return"
                        >
                            <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                <X className="w-5 h-5 md:w-6 md:h-6" />
                            </span>
                        </button>
                    </div>

                    <div className="px-8 py-10 md:px-12 md:py-16">
                        {/* Header */}
                        <div className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                                {title}
                            </h1>
                            {lastUpdated && (
                                <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
                                    Last updated: {lastUpdated}
                                </p>
                            )}
                            <div className="mt-8 h-1 w-20 bg-orange-500 rounded-full"></div>
                        </div>

                        {/* Content Area */}
                        <div className="space-y-12 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed
                            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:dark:text-white [&_h2]:mb-4 [&_h2]:mt-12
                            [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:dark:text-white [&_h3]:mb-3 [&_h3]:mt-8
                            [&_p]:mb-4
                            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-6
                            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-4 [&_ol]:mb-6
                            [&_strong]:text-gray-900 [&_strong]:dark:text-white [&_strong]:font-semibold">
                            {children}
                        </div>

                        {/* Footer / Back link */}
                        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex justify-center sm:justify-start">
                            <button
                                onClick={handleClose}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400 font-semibold transition-all hover:gap-3 group"
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                Return to Previous Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PolicyLayout;
