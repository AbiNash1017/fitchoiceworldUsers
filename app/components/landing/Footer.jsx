'use client';
import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { SOCIAL_LINKS, LOGO_URL, CONTACT_INFO, APP_LINKS } from '@/app/constants';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <img src={LOGO_URL} alt="Logo" className="h-10 w-auto" />
                            <h3 className="text-2xl font-bold flex items-center gap-1">Fykli - Fit Choice World<span className="text-gray-400"></span></h3>
                        </Link>
                        <p className="text-gray-500 max-w-sm text-lg leading-relaxed mb-6">
                            Empowering your journey with technology that feels human.
                            Download the app today and start moving.
                        </p>

                        {/* App Download Buttons */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <a
                                href={APP_LINKS.apple}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105 active:scale-95 duration-200"
                            >
                                <img
                                    src="/images/appstore.png"
                                    alt="Download on App Store"
                                    className="h-12 w-auto object-contain"
                                />
                            </a>
                            <a
                                href={APP_LINKS.google}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105 active:scale-95 duration-200"
                            >
                                <img
                                    src="/images/playstore.png"
                                    alt="Get it on Google Play"
                                    className="h-12 w-auto object-contain"
                                />
                            </a>
                        </div>
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href={SOCIAL_LINKS.instagram} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href={SOCIAL_LINKS.twitter} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href={SOCIAL_LINKS.facebook} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="w-5 h-5" />
                            </a>
                            {/* <a href={SOCIAL_LINKS.linkedin} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="w-5 h-5" />
                            </a> */}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-black">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/policy/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
                            <li><Link href="/policy/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/policy/refund-policy" className="hover:text-black transition-colors">Refund Policy</Link></li>
                            <li><Link href="/policy/cancellation-policy" className="hover:text-black transition-colors">Cancellation Policy</Link></li>
                            <li><Link href="/policy/vendor-payment" className="hover:text-black transition-colors">Vendor Payment</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-black">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/contact" className="hover:text-black transition-colors font-semibold text-black">Contact Us</Link></li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <span className="truncate">{CONTACT_INFO.email}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <span>{CONTACT_INFO.phone}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span>{CONTACT_INFO.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} Fit Choice World Inc. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        {/* <span className="text-sm font-medium text-gray-400">Made with ❤️ for Fitness</span> */}
                        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <Instagram className="w-4 h-4" />
                            <Twitter className="w-4 h-4" />
                            <Facebook className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
