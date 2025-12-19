'use client';
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah Jenks",
            role: "Marathon Runner",
            quote: "The minimal design keeps me focused. No clutter, just my stats. It's exactly what I needed to break my PB.",
            img: "/images/stock_profile.jpg"
        },
        {
            name: "Marcus Chen",
            role: "Crossfit Athlete",
            quote: "Finally, a fitness app that doesn't feel like a spreadsheet. It actually makes me want to log my workouts.",
            img: "/images/stock_profile.jpg"
        },
        {
            name: "Elena Rodriguez",
            role: "Yoga Instructor",
            quote: "Fit Choice World has completely transformed how I track my daily flows. The interface is as calm as my practice.",
            img: "/images/stock_profile.jpg"
        }
    ];

    return (
        <section id="reviews" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-center text-3xl font-bold mb-20 tracking-tight">Success Stories</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="relative mb-6">
                                <img src={review.img} alt={review.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg" />
                                <div className="absolute -bottom-2 -right-2 bg-black text-white p-1.5 rounded-full">
                                    <Star className="w-3 h-3 fill-current" />
                                </div>
                            </div>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">"{review.quote}"</p>
                            <div>
                                <h4 className="font-bold text-black text-lg">{review.name}</h4>
                                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
