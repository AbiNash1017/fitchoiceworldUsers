'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '@/app/constants';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src={LOGO_URL}
                        alt="Fit Choice World Logo"
                        className="h-12 w-auto object-contain"
                    />
                    <span className="text-xl font-bold tracking-tight text-black hidden sm:block">Fit Choice World</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
                    <Link href="/#features" className="hover:text-black transition-colors">Features</Link>
                    {/* <Link href="/#reviews" className="hover:text-black transition-colors">Stories</Link> */}
                    <Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link>
                    <Link href="/#download-app" className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Get the App
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-6 shadow-xl animate-in slide-in-from-top-5">
                    <Link href="/#features" className="text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>Features</Link>
                    <Link href="/#reviews" className="text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>Stories</Link>
                    <Link href="/contact" className="text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    <Link href="/#download-app" className="bg-black text-white w-full py-3 rounded-xl font-semibold text-center" onClick={() => setIsOpen(false)}>Download Now</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
