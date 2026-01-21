'use client';
import React from 'react';
import { Apple, Play, Activity, Coins } from 'lucide-react';
import { APP_LINKS } from '@/app/constants';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-hidden supports-[min-height:100dvh]:min-h-[100dvh]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Hero_img.png"
                    alt="Hero Background"
                    className="w-full h-full object-cover scale-105 animate-in fade-in duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-5xl mx-auto w-full text-center space-y-8 pt-12">
                {/* Badge */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-forwards opacity-0">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-600/20 backdrop-blur-md border border-orange-500/50 text-sm font-bold text-orange-300 shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:bg-orange-600/30 transition-all hover:scale-105 cursor-default">
                        <Coins className="w-4 h-4 text-orange-400 animate-pulse" />
                        <span className="tracking-wide">Powered by FYKLI Fit Coins</span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1] drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-forwards opacity-0">
                    Fitness <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-lg">On The Go</span>
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-forwards opacity-0">
                    Book any fitness center around you with <span className="font-bold text-white">Fit Coins</span>. No memberships, no contracts. Just scan, sweat, and go.
                </p>

                {/* Buttons */}
                <div id="download-app" className="flex flex-col sm:flex-row gap-5 pt-8 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-forwards opacity-0">
                    <a
                        href={APP_LINKS.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all hover:scale-[1.05] active:scale-95 duration-200 shadow-2xl hover:shadow-white/20"
                    >
                        <Apple className="w-8 h-8 fill-current transition-transform group-hover:-translate-y-0.5" />
                        <div className="text-left">
                            <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">Download on the</div>
                            <div className="text-lg font-bold leading-none">App Store</div>
                        </div>
                    </a>

                    <a
                        href={APP_LINKS.google}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl hover:brightness-110 transition-all hover:scale-[1.05] active:scale-95 duration-200 shadow-2xl hover:shadow-orange-500/40"
                    >
                        <Play className="w-7 h-7 fill-white ml-1 transition-transform group-hover:translate-x-0.5" />
                        <div className="text-left ml-1">
                            <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Get it on</div>
                            <div className="text-lg font-bold leading-none">Google Play</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
