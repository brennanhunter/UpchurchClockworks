'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

interface HeroSectionProps {
  time: Date;
}

const HeroSection = ({ time }: HeroSectionProps) => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample image paths - replace with your actual image paths
  const galleryImages = [
    '/images/gallery/grandfather-clock-1.jpg',
    '/images/gallery/mantle-clock-restoration.jpg', 
    '/images/gallery/antique-wall-clock.jpg',
    '/images/gallery/pocket-watch-repair.jpg'
  ];

  // Cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Format time with leading zeros
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Background Image Gallery */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${galleryImages[currentImageIndex]})`,
              }}
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Additional overlay gradients for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-amber-500 w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-500/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              y: [-20, -40, -20]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent leading-tight">
            Precision Clock Repair
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
            Expert restoration & repair services in Central Texas
          </p>
          <p className="text-lg text-amber-400 mb-12 font-cinzel tracking-wide italic">
            &quot;Timepieces restored to their original elegance&quot;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="tel:2548569395"
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-lg font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-amber-500/30"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5" />
            Call (254) 856-9395
          </motion.a>
          <motion.a
            href="#contact"
            className="border-2 border-amber-500 text-amber-500 px-6 py-3 rounded-lg font-bold text-lg hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Request Consultation
          </motion.a>
        </motion.div>

        {/* Live Clock Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mt-16 flex justify-center"
        >
          <div className="bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 shadow-lg">
            <div className="text-3xl md:text-4xl font-mono text-amber-400">
              {formatTime(time)}
            </div>
            <div className="text-sm text-gray-400 mt-2 tracking-wider">
              {time.toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;