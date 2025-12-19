'use client';
import React from 'react';
import { Dumbbell, Activity, Salad } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Dumbbell className="w-6 h-6" />,
            title: "Smart Workouts",
            desc: "AI-generated routines that adapt to your progress automatically.",
            image: "/images/showcard_1.jpeg"
        },
        {
            icon: <Activity className="w-6 h-6" />,
            title: "Real-time Tracking",
            desc: "Precision metrics for running, cycling, and HIIT sessions.",
            image: "/images/showcard_2.jpeg"
        },
        {
            icon: <Salad className="w-6 h-6" />,
            title: "Nutrition Guide",
            desc: "Macro tracking made simple with instant photo recognition.",
            image: "/images/showcard_3.jpeg"
        }
    ];

    return (
        <section id="features" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">Designed for Motion</h2>
                    <p className="text-xl text-gray-500">Everything you need to reach your peak, neatly packed into a minimal interface.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-default">
                            <div className="h-64 rounded-[1.5rem] overflow-hidden mb-6 relative">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <div className="text-black">
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 pb-6">
                                <h3 className="text-2xl font-bold mb-3 text-black">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
