'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '@/app/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine if we should show the transparent style
    const isHomePage = pathname === '/';
    const shouldShowTransparent = isHomePage && !isScrolled;

    // Dynamic classes based on scroll state
    const navClasses = shouldShowTransparent
        ? "bg-transparent border-transparent py-6"
        : "bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm";

    const textClasses = shouldShowTransparent
        ? "text-white/90 hover:text-white"
        : "text-gray-800 hover:text-black";

    const logoTextClasses = shouldShowTransparent
        ? "text-white"
        : "text-black";

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${navClasses}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <imgag
                        src={LOGO_URL}
                        alt="Fit Choice World Logo"
                        className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                    <span className={`text-xl font-bold tracking-tight hidden sm:block transition-colors ${logoTextClasses}`}>
                        FYKLI <span className="font-light opacity-80">- Fit Choice World</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className={`hidden md:flex items-center space-x-8 text-sm font-medium transition-colors ${textClasses}`}>
                    <Link href="/#how-it-works" className="hover:opacity-100 opacity-80 transition-opacity">How it Works</Link>
                    <Link href="/contact" className="hover:opacity-100 opacity-80 transition-opacity">Contact Us</Link>
                    <Link
                        href="/#download-app"
                        className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg transform hover:-translate-y-0.5 hover:shadow-xl ${!shouldShowTransparent
                            ? "bg-black text-white hover:bg-gray-800"
                            : "bg-white text-black hover:bg-gray-100"
                            }`}
                    >
                        Get the App
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 transition-colors ${!shouldShowTransparent ? 'text-black' : 'text-white'}`}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-6 shadow-2xl animate-in slide-in-from-top-5">
                    <Link href="/#how-it-works" className="text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>How it Works</Link>
                    <Link href="/contact" className="text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    <Link href="/#download-app" className="bg-black text-white w-full py-3 rounded-xl font-semibold text-center shadow-lg" onClick={() => setIsOpen(false)}>Download Now</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
