'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  CreditCard,
  Coins
} from 'lucide-react';

const WhyFitCoins = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "No Memberships",
      description: "Stop paying for time you don't use. Pay only for the sessions you attend.",
      color: "from-brand-primary to-brand-accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "City-Wide Access",
      description: "One wallet, infinite possibilities. Access any partner gym or studio nearby.",
      color: "from-brand-primary to-brand-accent"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Never Expire",
      description: "Your coins stay with you. Use them today, next month, or whenever you're ready.",
      color: "from-brand-primary to-brand-accent"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Safe & Secure",
      description: "Transparent transactions and instant bookings. No hidden fees, ever.",
      color: "from-brand-primary to-brand-accent"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Visual/Hero */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Floating Coin Visual */}
              <div className="relative z-10 bg-gradient-to-br from-[#111] to-[#222] rounded-[3rem] p-12 md:p-16 shadow-2xl border border-white/10 flex flex-col items-center">
                <motion.div
                  animate={{ 
                    y: [0, -20, 0]
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 15,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ 
                    y: {
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }
                  }}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center mb-8 drop-shadow-[0_20px_50px_rgba(255,165,0,0.3)] cursor-pointer"
                >
                  <img src="/fitcoin.svg" alt="Fit Coin" className="w-full h-full object-contain" />
                </motion.div>
                <p className="text-gray-400 text-center max-w-xs text-sm leading-relaxed">INTRODUCING</p>
                <h3 className="text-3xl font-black text-white text-center mb-4 tracking-tighter">
                  FIT COINS
                </h3>
                <p className="text-gray-400 text-center max-w-xs text-sm leading-relaxed">
                  The universal currency for fitness, sports and wellness. Empowering you to train anywhere, anytime.
                </p>
              </div>

              {/* Backglow */}
              <div className="absolute inset-0 bg-brand-primary/10 blur-[100px] rounded-full z-0 translate-y-10" />
            </motion.div>
          </div>

          {/* Right Side: Benefits Grid */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-6 leading-tight">
                One Coin. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Endless Possibilities.</span>
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                Fit Choice World replaces expensive, locked-in memberships with a flexible coin-based system.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {benefits.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-black mb-2 text-lg group-hover:text-brand-primary transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyFitCoins;
