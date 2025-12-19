'use client';
import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';

const VendorCTA = () => {
    return (
        <section id="vendor-cta" className="py-32 bg-black text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800 rounded-full blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-800 rounded-full blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 transform -rotate-6">
                    <Briefcase className="w-8 h-8 text-black" />
                </div>

                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                    Grow with Fit Choice World
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join our network of premium fitness professionals and reach thousands of users dedicated to their wellness journey.
                </p>

                <button className="group relative inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 duration-200">
                    <span>If you're a vendor, get started here</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
};

export default VendorCTA;
