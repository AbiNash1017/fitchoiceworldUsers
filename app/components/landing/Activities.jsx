'use client';
import React from 'react';
import {
    Dumbbell,
    Waves,
    Heart,
    Zap,
    Target,
    Music,
    Flame,
    Weight,
    Accessibility,
    Move,
    Footprints,
    Disc,
    ArrowRight,
    Sparkles
} from 'lucide-react';

const Activities = () => {
    const activities = [
        { name: "Gym", icon: <Dumbbell className="w-8 h-8" />, color: "bg-orange-500", shadow: "shadow-orange-500/20" },
        { name: "Yoga", icon: <Heart className="w-8 h-8" />, color: "bg-purple-500", shadow: "shadow-purple-500/20" },
        { name: "Swimming", icon: <Waves className="w-8 h-8" />, color: "bg-blue-500", shadow: "shadow-blue-500/20" },
        { name: "Martial Arts", icon: <Zap className="w-8 h-8" />, color: "bg-green-500", shadow: "shadow-green-500/20" },
        { name: "Power Lifting", icon: <Weight className="w-8 h-8" />, color: "bg-yellow-500", shadow: "shadow-yellow-500/20" },
        { name: "CrossFit", icon: <Flame className="w-8 h-8" />, color: "bg-red-500", shadow: "shadow-red-500/20" },
        { name: "Pilates", icon: <Move className="w-8 h-8" />, color: "bg-indigo-500", shadow: "shadow-indigo-500/20" },
        { name: "Aerobics", icon: <Footprints className="w-8 h-8" />, color: "bg-pink-500", shadow: "shadow-pink-500/20" },
        { name: "Calisthenics", icon: <Accessibility className="w-8 h-8" />, color: "bg-amber-500", shadow: "shadow-amber-500/20" },
        { name: "Zumba", icon: <Music className="w-8 h-8" />, color: "bg-rose-500", shadow: "shadow-rose-500/20" },
        { name: "Dance Fitness", icon: <Disc className="w-8 h-8" />, color: "bg-cyan-500", shadow: "shadow-cyan-500/20" },
        { name: "Shooting", icon: <Target className="w-8 h-8" />, color: "bg-red-500", shadow: "shadow-red-500/20" },
    ];

    return (
        <section id="features" className="py-16 md:py-20 bg-[#0a0a0a] text-white overflow-hidden scroll-mt-20 min-h-[auto] lg:min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-medium text-orange-400 mb-4 animate-in fade-in slide-in-from-bottom-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        Endless Possibilities
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
                        One Coin. <span className="text-orange-500">Endless Centers.</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 max-w-2xl mx-auto">
                        From gyms to yoga studios, swimming pools to combat zones —
                        redeem your <span className="text-white font-semibold">Fit Coins</span> at any fitness center around you.
                    </p>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
                    {activities.map((activity, idx) => (
                        <div
                            key={idx}
                            className="group bg-[#111111] rounded-xl p-4 md:p-5 border border-white/5 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                            style={{ animationDelay: `${idx * 30}ms` }}
                        >
                            <div className={`${activity.color} w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center text-white mb-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${activity.shadow} shadow-lg mx-auto lg:mx-0`}>
                                {React.cloneElement(activity.icon, { className: "w-5 h-5 md:w-5.5 md:h-5.5" })}
                            </div>
                            <h3 className="text-xs md:text-sm font-bold text-white text-center lg:text-left leading-tight">{activity.name}</h3>
                        </div>
                    ))}
                </div>

                {/* Additional Text & CTA */}
                <div className="text-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
                    <p className="text-gray-500 mb-6 text-sm font-medium italic">And many more fitness activities...</p>
                    <a
                        href="#download-app"
                        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 group"
                    >
                        Explore All Centers
                        <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Activities;
