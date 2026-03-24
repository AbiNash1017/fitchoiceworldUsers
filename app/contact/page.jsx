'use client';
import React, { useState } from 'react';
import Link from 'next/link';
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
import AppDownloadModal from '../components/landing/AppDownloadModal';
import { CONTACT_INFO } from '@/app/constants';

const ContactPage = () => {
    const [formState, setFormState] = useState('idle'); // idle, sending, success
    const [showDownloadModal, setShowDownloadModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('sending');

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormState('success');
            } else {
                alert('Something went wrong. Please try again.');
                setFormState('idle');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again.');
            setFormState('idle');
        }
    };

    return (
        <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans">
            <Navbar onOpenDownloadModal={() => setShowDownloadModal(true)} />

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-x-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/fc_landing_hero.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
                </div>

                {/* App Download Modal - High z-index overlay */}
                <AppDownloadModal 
                    isOpen={showDownloadModal} 
                    onClose={() => setShowDownloadModal(false)}
                    isAbsolute={true}
                    position="top"
                />

                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                            Get in Touch
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                            We're here to <span className="text-brand-accent">help you.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                             Have questions about the app? Need help with your account? Our team is available to support your fitness journey.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Information */}
                        <div className="space-y-8">

                            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                {[
                                    { icon: <Mail className="w-5 h-5 text-brand-accent" />, label: "Email Us", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                                    { icon: <Phone className="w-5 h-5 text-brand-accent" />, label: "Call Us", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                                    { icon: <Clock className="w-5 h-5 text-brand-accent" />, label: "Support Hours", value: "6 AM - 6 PM (Mon-Sat)" },
                                    { icon: <MessageSquare className="w-5 h-5 text-brand-accent" />, label: "Quick Response", value: "Within 24 hours" }
                                ].map((item, idx) => {
                                    const Tag = item.href ? 'a' : 'div';
                                    return (
                                        <Tag
                                            key={idx}
                                            href={item.href}
                                            className={`p-5 md:p-6 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-brand-accent/20 hover:shadow-xl hover:shadow-red-100/50 transition-all duration-300 group block ${item.href ? 'cursor-pointer' : ''}`}
                                        >
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1 md:mb-2">{item.label}</p>
                                            <p className="font-bold text-gray-900 leading-tight break-all">{item.value}</p>
                                        </Tag>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                            {/* Form Decorative Element */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-50 rounded-full blur-3xl opacity-50"></div>

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
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Drop us a line.</h2>
                                    <p className="text-gray-500 mb-8 md:mb-10 italic">We'd love to hear from <span className="text-brand-accent font-bold">you.</span></p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                                <input
                                                    name="name"
                                                    required
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-accent/20 transition-all outline-none font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                                <input
                                                    name="email"
                                                    required
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-accent/20 transition-all outline-none font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                                            <div className="relative">
                                                <select name="subject" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black/5 transition-all outline-none appearance-none cursor-pointer font-medium">
                                                    <option>General Support</option>
                                                    <option>Vendor Partnerships</option>
                                                    <option>Performance Bug</option>
                                                    <option>Report a Bug</option>
                                                    <option>UI/UX</option>
                                                    <option>Feedback & Suggestions</option>
                                                    <option>Account Issues</option>
                                                    <option>Others</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                                                    <Clock className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                                            <textarea
                                                name="message"
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
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-accent">Join the movement</p>
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
