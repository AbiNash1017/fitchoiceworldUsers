'use client';
import React, { useState } from 'react';
import {
    Mail,
    MapPin,
    Phone,
    Send,
    MessageSquare,
    Clock,
    CheckCircle2
} from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { CONTACT_INFO } from '@/app/constants';

const ContactPage = () => {
    const [formState, setFormState] = useState('idle'); // idle, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('sending');
        // Simulate API call
        setTimeout(() => {
            setFormState('success');
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/fc_landing_hero.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                            Get in Touch
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                            We're here to <span className="text-gray-400">help you.</span>
                        </h1>
                        <p className="text-xl text-gray-500 leading-relaxed">
                            Have questions about the app? Need help with your account? Our team is available 24/7 to support your fitness journey.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-gray-100">
                                <img
                                    src="/images/landing_hero.jpg"
                                    alt="Support Team"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-2">Our Office</p>
                                    <h3 className="text-2xl font-bold text-white">Innovation Hub, Mysore</h3>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: <Mail className="w-5 h-5 text-black" />, label: "Email Us", value: CONTACT_INFO.email },
                                    { icon: <Phone className="w-5 h-5 text-black" />, label: "Call Us", value: CONTACT_INFO.phone },
                                    { icon: <MessageSquare className="w-5 h-5 text-black" />, label: "Live Chat", value: "Available 24/7" },
                                    { icon: <MapPin className="w-5 h-5 text-black" />, label: "Location", value: "Mysore, India" }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-black/10 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">{item.label}</p>
                                        <p className="font-bold text-gray-900 leading-tight">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                            {/* Form Decorative Element */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gray-50 rounded-full blur-3xl opacity-50"></div>

                            {formState === 'success' ? (
                                <div className="text-center py-12 animate-in zoom-in duration-500 relative z-10">
                                    <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle2 className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-4xl font-bold mb-4 tracking-tight">Message Received.</h3>
                                    <p className="text-gray-500 mb-10 text-lg">Thanks for reaching out! A member of our team will be in touch shortly.</p>
                                    <button
                                        onClick={() => setFormState('idle')}
                                        className="bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-black/10"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-bold mb-2 tracking-tight">Drop us a line.</h2>
                                    <p className="text-gray-500 mb-10 italic">We'd love to hear from you.</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black/5 transition-all outline-none font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black/5 transition-all outline-none font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                                            <div className="relative">
                                                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black/5 transition-all outline-none appearance-none cursor-pointer font-medium">
                                                    <option>General Support</option>
                                                    <option>Vendor Partnerships</option>
                                                    <option>Feedback & Suggestions</option>
                                                    <option>Account Issues</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                                                    <Clock className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                                            <textarea
                                                required
                                                rows={5}
                                                placeholder="Tell us more about your inquiry..."
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black/5 transition-all outline-none resize-none font-medium"
                                            ></textarea>
                                        </div>

                                        <button
                                            disabled={formState === 'sending'}
                                            className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:bg-gray-900 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-50 shadow-xl shadow-black/10"
                                        >
                                            {formState === 'sending' ? (
                                                <div className="w-6 h-6 border-3 border-white/20 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <>
                                                    <span>Submit Message</span>
                                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Join Grid - Micro Animation Element */}
            <section className="py-20 border-t border-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Join the movement</p>
                        <div className="flex gap-12 text-2xl font-black italic tracking-tighter">
                            <span>STRENGTH</span>
                            <span>COMMUNITY</span>
                            <span>RESULTS</span>
                            <span>BALANCE</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactPage;
