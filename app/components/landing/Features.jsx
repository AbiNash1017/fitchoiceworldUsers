'use client';
import React from 'react';
import { Wallet, Users, Shuffle } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Wallet className="w-8 h-8" />,
            title: "Pay Fast, Train Faster",
            subtext: "Seamless digital wallet for hassle-free bookings",
            desc: "Top up your wallet and book instantly. No cash, no cards, no waiting. Just tap, pay, and you're ready to sweat."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Your Fitness, Your Choice",
            subtext: "Train solo or with your favorite workout buddy",
            desc: "Book workouts that match your mood and goals. Whether you're flying solo or bringing a partner, we've got you covered."
        },
        {
            icon: <Shuffle className="w-8 h-8" />,
            title: "Never Get Bored Again",
            subtext: "Switch it up every single day",
            desc: "Swimming today, Zumba tomorrow? Mix and match activities whenever you want. Your fitness journey should be as dynamic as you are."
        }
    ];

    return (
        <section id="features" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">Elevate Your Fitness Game</h2>
                    <p className="text-xl text-gray-500">Seamless bookings, endless variety, and total control. Everything you need to stay consistent and crush your goals.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default flex flex-col h-full">
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300 text-black">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-black">{item.title}</h3>
                            <p className="text-black font-medium mb-3">{item.subtext}</p>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
