'use client';
import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { LOGO_URL } from '@/app/constants';
import Link from 'next/link';
import { SOCIAL_LINKS, CONTACT_INFO, APP_LINKS } from '@/app/constants';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-8 rounded-t-[3rem] mt-[-2rem] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src={LOGO_URL} alt="Logo" className="h-10 w-auto brightness-0 invert" />
              <span className="text-xl font-bold transition-colors text-white">
                Fykli <span className="font-light tracking-tight opacity-80">-  Fit Choice World</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              The ultimate ecosystem for fitness enthusiasts and sports lovers. Book, play, and connect in one tap.
            </p>

            {/* App Download Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
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
            
            {/* Social Links */}
            <div className="flex gap-4 mb-12">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-primary transition-all">
                    <Instagram size={20} />
                </a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-primary transition-all">
                    <Twitter size={20} />
                </a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-primary transition-all">
                    <Facebook size={20} />
                </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Platform</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><Link href="/policy/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/policy/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/policy/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
              {/* <li><Link href="/policy/cancellation-policy" className="hover:text-white transition-colors">Cancellation Policy</Link></li> */}
              <li><Link href="/policy/vendor-payment" className="hover:text-white transition-colors">Vendor Payment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-primary" />
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-primary" />
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-primary mt-1 shrink-0" />
                <span className="text-xs leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-xs font-medium">
          <p>© {new Date().getFullYear()} Fit Choice World - Fykli. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/policy/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/policy/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
