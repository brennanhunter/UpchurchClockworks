'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMenu } from '@/context/MenuContext';

export const Logo = () => {
  const { isMenuOpen } = useMenu();

  return (
    <motion.div
      className="fixed top-6 left-6 z-50" // Adjusted positioning to account for smaller size
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
            boxShadow: "0 0 15px rgba(245, 158, 11, 0.5)" // Slightly reduced shadow
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Scaled down image container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 1 }}
            className="relative w-36 h-auto" // Changed from w-48 to w-36 (25% smaller)
          >
            <Image
              src="/images/Logo.png"
              alt="Upchurch Clockworks"
              width={144}  // 25% smaller than original 192
              height={144} // Maintain aspect ratio
              className="object-contain"
              onError={(e) => {
                console.error("Failed to load logo image");
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </motion.div>
          
          {/* Animated golden border */}
          <motion.div
            className="absolute inset-0 border-2 pointer-events-none"
            style={{ borderColor: 'rgba(245, 158, 11, 0.3)' }}
            animate={{
              borderWidth: ['2px', '3px', '2px'],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />
        </motion.div>
        
        {/* Subtle particles around logo - scaled down slightly */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`, // Smaller particles
              height: `${Math.random() * 2 + 1}px`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.2, 0] // Smaller scale animation
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};