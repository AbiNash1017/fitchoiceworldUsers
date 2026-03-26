'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  ShieldCheck, 
  Building, 
  Plus, 
  ArrowRight 
} from 'lucide-react';

const VendorCTA = () => {
  const benefits = [
    {
      icon: <Users size={20} />,
      title: "Reach New Customers",
      desc: "Connect with a vast community of fitness lovers.",
      color: "text-brand-primary",
      bg: "bg-brand-primary/10"
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Boost Revenue",
      desc: "Fill empty slots instantly during off-peak hours.",
      color: "text-brand-primary",
      bg: "bg-brand-primary/10"
    },
    {
      icon: <Calendar size={20} />,
      title: "Easy Scheduling",
      desc: "Manage all your RTP and gym bookings in one place.",
      color: "text-brand-primary",
      bg: "bg-brand-primary/10"
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Guaranteed Payments",
      desc: "Get paid securely and quickly within 24 hours.",
      color: "text-brand-primary",
      bg: "bg-brand-primary/10"
    }
  ];

  return (
    <section id="vendor-cta" className="h-screen min-h-[850px] flex items-center bg-white relative overflow-hidden px-4 md:px-8 border-t border-gray-100">
      
      {/* Abstract Outline SVG Art Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 z-0">
        <motion.div 
          animate={{ y: [-20, 20, -20], rotate: [-2, 2, -2] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 md:-left-10 top-10"
        >
          <Building className="w-[25rem] h-[25rem] md:w-[35rem] md:h-[35rem] text-black" strokeWidth={1} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [20, -20, 20], scale: [0.95, 1.05, 0.95] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 md:-right-10 bottom-10"
        >
          <TrendingUp className="w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] text-black" strokeWidth={1} />
        </motion.div>

        <motion.div 
          animate={{ x: [-15, 15, -15], rotate: [5, -5, 5] }} 
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[30%] -bottom-32 hidden md:block"
        >
          <ShieldCheck className="w-[25rem] h-[25rem] md:w-[30rem] md:h-[30rem] text-black" strokeWidth={1} />
        </motion.div>

        <motion.div 
          animate={{ y: [-15, 15, -15], rotate: [-10, 10, -10] }} 
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[25%] -top-20 hidden md:block"
        >
          <Users className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] text-black" strokeWidth={1} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content & Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 mb-6">
              <Building size={16} className="text-brand-primary" />
              <span className="text-sm font-bold text-brand-primary">For Centers</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-6 leading-[1.1]">
              List Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Center</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed">
              Join the Fykli network and get discovered by thousands of fitness enthusiasts. Monetize your empty slots, accept seamless bookings, and grow your business.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-black mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Registration Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Soft decorative background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-accent/10 rounded-[3rem] blur-2xl transform scale-105 pointer-events-none"></div>
            
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10 flex flex-col items-center text-center">
              
              <h3 className="text-3xl font-black text-black mb-8">Register Your Center</h3>
              
              {/* Fake Avatars / Trusted Badges */}
              {/* <div className="flex flex-col items-center mb-10">
                <div className="flex -space-x-3 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center shadow-sm">
                      <Building size={16} className="text-gray-400" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-black flex items-center justify-center shadow-sm z-10 text-white">
                    <Plus size={16} />
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-500">Trusted by top fitness brands</p>
              </div> */}

              <a 
                href="https://center.fitchoiceworld.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-black text-white font-bold flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors shadow-lg group"
              >
                <Building size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                Register My Center
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="text-xs text-gray-400 mt-6 max-w-xs">
                By registering, you agree to our Terms of Service and Partner Agreement.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VendorCTA;
