'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMenu } from '@/context/MenuContext';

export const Logo = () => {
  const { isMenuOpen } = useMenu();

  return (
    <motion.div
      className="fixed top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 z-50" // Responsive positioning
      initial={{ opacity: 0, x: -50 }}
      animate={{ 
        opacity: isMenuOpen ? 0 : 1,
        x: 0
      }}
      transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
    >
      <div className="relative">
        {/* Logo container with hover effects */}
        <motion.div
          className="relative overflow-hidden rounded-lg"
          whileHover={{ 
            scale: 1.05,
            rotate: -1,
            boxShadow: "0 0 15px rgba(245, 158, 11, 0.5)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Responsive image container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 1 }}
            className="relative w-20 sm:w-24 md:w-32 lg:w-36 h-auto" // Much smaller on mobile (w-20 = 80px)
          >
            <Image
              src="/images/Logo.png"
              alt="Upchurch Clockworks"
              width={144}
              height={144}
              className="object-contain w-full h-auto" // Make image responsive
              onError={(e) => {
                console.error("Failed to load logo image");
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </motion.div>
          
          {/* Animated golden border */}
          <motion.div
            className="absolute inset-0 border sm:border-2 pointer-events-none" // Thinner border on mobile
            style={{ borderColor: 'rgba(245, 158, 11, 0.3)' }}
            animate={{
              borderWidth: ['1px', '2px', '1px'],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />
        </motion.div>
        
        {/* Subtle particles around logo - hide on mobile to reduce clutter */}
        <div className="hidden sm:block">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-amber-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};