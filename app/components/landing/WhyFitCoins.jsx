import React from 'react';
import { CheckCircle2, Coins } from 'lucide-react';

const WhyFitCoins = () => {
    const benefits = [
        "No monthly memberships — pay only when you work out",
        "Use at any partner fitness center across the city",
        "Coins never expire — use them at your own pace",
        "Track all your workouts in one app",
        "Earn bonus coins through referrals and challenges"
    ];

    return (
        <section className="py-12 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#111111] rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                Why Fit Coins?
                            </h2>

                            <div className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-500/20" />
                                        </div>
                                        <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-200">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Visual */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-orange-500 blur-[80px] opacity-20 rounded-full animate-pulse" />

                                {/* Orange Circle */}
                                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex flex-col items-center justify-center text-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                    <Coins className="w-20 h-20 md:w-24 md:h-24 mb-4 text-white" />
                                    <span className="text-2xl md:text-3xl font-bold tracking-tight">Fit Coins</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background details */}
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFitCoins;
