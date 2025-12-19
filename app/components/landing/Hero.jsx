'use client';
import React from 'react';
import { Apple, Play, Activity } from 'lucide-react';
import { APP_LINKS } from '@/app/constants';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-8 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                    {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Version 2.0 is live
                    </div> */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-[1.1]">
                        Fit Choice World <br />
                        <span className="text-gray-400">Your Health Hub.</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-md leading-relaxed">
                        The all-in-one companion for your wellness journey. Smart tracking, personalized plans, and a community that moves with you.
                    </p>

                    <div id="download-app" className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href={APP_LINKS.apple}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95 duration-200 shadow-xl shadow-gray-200"
                        >
                            <Apple className="w-8 h-8 fill-current" />
                            <div className="text-left">
                                <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Download on the</div>
                                <div className="text-lg font-bold leading-none">App Store</div>
                            </div>
                        </a>

                        <a
                            href={APP_LINKS.google}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-gray-100 text-black px-8 py-4 rounded-2xl hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-95 duration-200"
                        >
                            <Play className="w-7 h-7 fill-black ml-1" />
                            <div className="text-left ml-1">
                                <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">Get it on</div>
                                <div className="text-lg font-bold leading-none">Google Play</div>
                            </div>
                        </a>
                    </div>
                    {/*
                    <div className="pt-8 flex items-center gap-4 text-sm font-medium text-gray-400">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                    <img src="/images/stock_profile.jpg" alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p>Trusted by 50,000+ active users</p>
                    </div>
                    */}
                </div>

                {/* Right Image */}
                <div
                    className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl shadow-gray-200 group md:rotate-1 hover:rotate-0 transition-all duration-500"
                    style={{
                        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                        maskImage: 'radial-gradient(white, black)',
                        transform: 'translateZ(0)'
                    }}
                >
                    <img
                        src="/images/fc_landing_hero.jpeg"
                        alt="Athlete using fitness app"
                        className="object-cover w-full h-full transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Floating UI Card Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                                <Activity className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-black">Daily Goal Reached</h4>
                                <p className="text-sm text-gray-500">You burned 840 active calories today!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
