import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, MapPin, Users, Sparkles } from 'lucide-react';

const Features = () => {
  const steps = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Get Fit Coins",
      desc: "Purchase Fit Coins in-app. No expiry, no hidden fees—just pure flexibility for your fitness journey.",
      step: "01"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Find a Center",
      desc: "Explore premium gyms, turfs, and studios. Filter by sport, distance, or vibe, and lock in your slot.",
      step: "02"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Match & Play",
      desc: "Create games, connect with fellow athletes around you, and play together. Your next big match is just a tap away.",
      step: "03"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Soft Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Simple & Easy
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-black tracking-tighter">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Works</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
            Get started in minutes. No complicated sign-ups, no long-term commitments. Just pure action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all group relative overflow-hidden flex flex-col h-full cursor-default"
            >
              {/* Large Watermark Number */}
              <motion.div 
                className="absolute top-4 right-6 text-7xl md:text-8xl font-black text-gray-100/50 select-none z-0 transition-all duration-500"
                whileHover={{ scale: 1.1, opacity: 1, color: "rgba(161, 45, 51, 0.05)" }}
              >
                {item.step}
              </motion.div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 text-brand-primary group-hover:bg-gradient-to-br group-hover:from-brand-primary group-hover:to-brand-accent group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-primary/30 transform group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-brand-primary transition-colors">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed flex-grow">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;