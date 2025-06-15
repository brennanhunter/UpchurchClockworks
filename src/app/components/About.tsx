'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Home, Star } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
}

const AboutSection = () => {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const stats: Stat[] = [
    { value: "2022", label: "Established" },
    { value: "100+", label: "Clocks Restored" },
    { value: "99%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section ref={aboutRef} id="about" className="py-20 px-4 bg-gradient-to-br from-black/50 to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400 font-cinzel">
              Master Clockmakers
            </h2>
            <div className="w-24 h-1 bg-amber-500 mb-8"></div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At Upchurch Clockworks, we understand that clocks are more than timekeepers—they&apos;re 
              cherished heirlooms and historical artifacts. Under the expert guidance of Ryan Upchurch, 
              our team blends centuries-old horological techniques with modern precision.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Each timepiece receives individualized attention, from initial assessment to final 
              calibration. Our commitment to excellence has made us Central Texas&apos; premier clock 
              restoration service.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gray-900/50 border border-amber-500/20 rounded-lg p-4 text-center"
                >
                  <div className="text-3xl font-bold text-amber-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-xl p-8 border border-amber-500/30 shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-amber-500/10 transition-all"
                >
                  <Award className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Certified Expertise</h3>
                  <p className="text-gray-300 text-sm">Professional restoration with museum-quality standards</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-amber-500/10 transition-all"
                >
                  <Users className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Skilled Team</h3>
                  <p className="text-gray-300 text-sm">Including master clocksmith Bruce High</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-amber-500/10 transition-all"
                >
                  <Home className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Mobile Service</h3>
                  <p className="text-gray-300 text-sm">We come to you for large or delicate pieces</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-amber-500/10 transition-all"
                >
                  <Star className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">5-Star Reputation</h3>
                  <p className="text-gray-300 text-sm">Consistently exceptional customer experiences</p>
                </motion.div>
              </div>
            </div>
            
            {/* Decorative clock elements */}
            <div className="absolute -top-8 -left-8 -z-10">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-amber-500/20">
                <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8"/>
                <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;