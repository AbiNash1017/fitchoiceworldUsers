import React from 'react';
import { Wallet, MapPin, QrCode, Sparkles } from 'lucide-react';

const Features = () => {
    const steps = [
        {
            icon: <Wallet className="w-8 h-8" />,
            title: "Get Fit Coins",
            desc: "Purchase Fit Coins through the FYKLI app. Buy as many or as few as you need — they never expire.",
            step: "01"
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Find a Center",
            desc: "Browse 500+ fitness centers near you. Filter by activity type, distance, ratings, and availability.",
            step: "02"
        },
        {
            icon: <QrCode className="w-8 h-8" />,
            title: "Scan & Work Out",
            desc: "Show your QR code at the center, redeem your Fit Coins, and start your workout instantly.",
            step: "03"
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-gray-50 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-sm font-medium text-orange-700 mb-6 animate-in fade-in slide-in-from-bottom-2">
                        <Sparkles className="w-4 h-4 text-orange-600" />
                        Simple & Easy
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">
                        How It <span className="text-orange-500">Works</span>
                    </h2>
                    <p className="text-xl text-gray-500">
                        Get started in minutes. No complicated sign-ups, no long-term commitments.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full animate-in fade-in slide-in-from-bottom-6 fill-mode-both" style={{ animationDelay: `${idx * 100}ms` }}>
                            <div className="absolute top-6 right-6 text-6xl font-black text-gray-50 opacity-50 select-none z-0 group-hover:text-orange-50 transition-colors pointer-events-none">
                                {item.step}
                            </div>
                            <div className="relative z-10 flex flex-col flex-grow">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 text-orange-600 shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed flex-grow">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
