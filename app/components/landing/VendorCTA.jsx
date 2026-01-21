'use client';
import React from 'react';
import { Building2, Users, TrendingUp, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const VendorCTA = () => {
    const features = [
        {
            icon: <Users className="w-5 h-5" />,
            title: "Reach New Customers",
            desc: "Connect with a vast community"
        },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            title: "Boost Revenue",
            desc: "Fill empty slots instantly"
        },
        {
            icon: <Calendar className="w-5 h-5" />,
            title: "Easy Scheduling",
            desc: "Manage bookings in one place"
        },
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: "Guaranteed Payments",
            desc: "Get paid within 24 hours"
        }
    ];

    return (
        <section id="vendor-cta" className="py-24 md:py-32 bg-white text-black overflow-hidden relative">
            {/* Background Gradients to match warm Hero theme */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-50/40 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-sm font-medium text-orange-700">
                            <Building2 className="w-4 h-4" />
                            For Fitness Centers
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                            List Your{' '}
                            <span className="text-orange-500">
                                Fitness Center
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl">
                            Join the FitChoiceWorld network and get discovered by thousands of fitness enthusiasts. Accept Fit Coins and grow your business.
                        </p>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="group p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-black text-sm md:text-base mb-1">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-500 text-xs md:text-sm">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - CTA Card */}
                    <div className="flex items-center justify-center lg:justify-end animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                        <div className="w-full max-w-md p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100 relative overflow-hidden shadow-lg">
                            {/* Glow Effect */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-100 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative z-10 text-center space-y-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-black">
                                    Register Your Center
                                </h3>

                                {/* Social Proof / Avatar Stack */}
                                <div className="flex flex-col items-center gap-3">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Building2 className="w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-900 flex items-center justify-center text-xs font-bold text-white">
                                            +
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        Trusted by top fitness brands
                                    </p>
                                </div>

                                {/* Animated CTA Button */}
                                <Link
                                    href="https://center.fitchoiceworld.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 rounded-xl bg-black text-white font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    {/* Shine Effect */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>

                                    {/* Button Content */}
                                    <Building2 className="w-4 h-4" />
                                    <span className="relative z-10">Register My Fitness Center</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>

                                <p className="text-xs text-gray-400">
                                    By registering, you agree to our Terms of Service and Partner Agreement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VendorCTA;
