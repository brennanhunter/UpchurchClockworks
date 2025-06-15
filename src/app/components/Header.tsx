'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const UpchurchClockworksHeader = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [time, setTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <div ref={containerRef} className="relative w-full h-0">
      <AnimatePresence mode="wait">
        {/* Desktop: Closed state - Floating clock menu button */}
        {!isMenuOpen && (
          <motion.div
            key="closed"
            initial={{ x: 100, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                delay: 0.5
              } 
            }}
            exit={{ x: 100, opacity: 0 }}
            className="hidden md:block fixed top-1/2 right-0 transform -translate-y-1/2 z-50"
            style={{ height: '80vh' }}
          >
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              className="relative bg-gradient-to-r from-gray-900 to-black text-white w-20 h-full flex items-center justify-center overflow-hidden group border-l-2 border-y-2 border-amber-500 shadow-2xl"
              style={{ 
                borderTopLeftRadius: '2rem', 
                borderBottomLeftRadius: '2rem',
                boxShadow: '0 0 15px rgba(245, 158, 11, 0.5)'
              }}
              whileHover={{ width: 100 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              aria-label="Open menu"
            >
              {/* Pulsing glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-l-full"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(245, 158, 11, 0.4)',
                    '0 0 0 10px rgba(245, 158, 11, 0)',
                    '0 0 0 0 rgba(245, 158, 11, 0)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              />
              
              {/* Professional clock component */}
              <motion.div 
                className="relative w-16 h-16 z-10"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Clock 
                  value={time} 
                  size={64}
                  renderNumbers={false}
                  renderMinuteMarks={false}
                  renderHourMarks={true}
                  hourMarksLength={6}
                  hourMarksWidth={2}
                  hourHandLength={50}
                  hourHandWidth={4}
                  minuteHandLength={70}
                  minuteHandWidth={3}
                  secondHandLength={75}
                  secondHandWidth={1.5}
                  secondHandOppositeLength={5}
                  className="custom-react-clock"
                />
              </motion.div>

              {/* Animated hover text */}
              <motion.span
                className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold tracking-widest opacity-0 group-hover:opacity-100"
                style={{ 
                  fontFamily: "'Cinzel', serif",
                  textShadow: '0 0 5px rgba(245, 158, 11, 0.8)'
                }}
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  x: { type: "spring", stiffness: 300 }
                }}
              >
                MENU
              </motion.span>
            </motion.button>
          </motion.div>
        )}

        {/* Mobile: Simple hamburger menu */}
        {!isMenuOpen && (
          <motion.div
            key="mobile-closed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="md:hidden fixed top-4 right-4 z-50"
          >
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              className="p-3 bg-amber-500/90 backdrop-blur-sm rounded-full border-2 border-amber-400 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                <motion.path
                  d="M3 12h18M3 6h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
              </svg>
            </motion.button>
          </motion.div>
        )}

        {/* Open state - Fullscreen horology experience */}
        {isMenuOpen && (
          <motion.div
            key="open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black z-40 overflow-hidden"
          >
            {/* Chalk texture overlay */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Animated Particles */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-amber-500"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 1.5 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
              />
            ))}

            {/* Close button */}
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-amber-500 text-4xl font-light z-50 w-16 h-16 rounded-full border-2 border-amber-500 flex items-center justify-center bg-black/30 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.1, 
                rotate: 90,
                backgroundColor: 'rgba(245, 158, 11, 0.1)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              aria-label="Close menu"
            >
              ×
            </motion.button>

            {/* Main content container */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center py-16 px-4">
              {/* Company Name Header */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              >
                <motion.h1
                  className="text-4xl md:text-6xl font-bold tracking-wider text-center"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    background: "linear-gradient(to right, #fde68a, #f59e0b, #fde68a)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 30px rgba(245, 158, 11, 0.5)"
                  }}
                  animate={{
                    backgroundPosition: ["0% center", "200% center"]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  UPCHURCH
                </motion.h1>
                <motion.div
                  className="text-xl md:text-2xl text-amber-500 text-center mt-2 tracking-[0.3em]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                  initial={{ opacity: 0, letterSpacing: "0.1em" }}
                  animate={{ opacity: 1, letterSpacing: "0.3em" }}
                  transition={{ delay: 0.6, duration: 1 }}
                >
                  CLOCKWORKS
                </motion.div>
                <motion.div
                  className="h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </motion.div>

              {/* Menu container with scroll */}
              <div className="flex-grow w-full max-w-2xl overflow-y-auto py-4">
                <div className="flex items-center justify-center min-h-full">
                  <motion.nav 
                    className="space-y-4 md:space-y-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.15,
                          delayChildren: 1.2
                        }
                      }
                    }}
                  >
                    {[
                      { href: '/', label: 'HOME' },
                      { href: '/services', label: 'SERVICES' },
                      { href: '/collection', label: 'COLLECTION' },
                      { href: '/heritage', label: 'OUR HERITAGE' },
                      { href: '/contact', label: 'CONTACT US' }
                    ].map((item) => (
                      <motion.div
                        key={item.label}
                        variants={{
                          hidden: { y: 20, opacity: 0 },
                          visible: { 
                            y: 0, 
                            opacity: 1,
                            transition: { 
                              type: "spring", 
                              stiffness: 120,
                              damping: 15
                            }
                          }
                        }}
                        className="text-center"
                      >
                        <motion.a
                          href={item.href}
                          className="relative inline-block text-2xl md:text-4xl font-bold group"
                          whileHover={{ 
                            scale: 1.05,
                            color: "#f59e0b"
                          }}
                          whileTap={{ scale: 0.95 }}
                          style={{ 
                            fontFamily: "'Cinzel', serif",
                            color: "#e5e7eb",
                            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                          }}
                        >
                          <span className="relative z-10">{item.label}</span>
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-amber-500"
                            initial={{ width: '0%' }}
                            whileHover={{ width: '100%' }}
                            transition={{ type: "spring", stiffness: 250 }}
                          />
                        </motion.a>
                      </motion.div>
                    ))}
                  </motion.nav>
                </div>
              </div>

              {/* Clock at bottom with fixed position */}
              <motion.div
                className="mt-auto w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, type: "spring" }}
              >
                <div className="premium-digital-clock">
                  <div className="clock-display">
                    <motion.div 
                      className="time-segment hours"
                      animate={{ 
                        textShadow: [
                          '0 0 5px rgba(245, 158, 11, 0.5)',
                          '0 0 15px rgba(245, 158, 11, 0.8)',
                          '0 0 5px rgba(245, 158, 11, 0.5)'
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity 
                      }}
                    >
                      {time.getHours().toString().padStart(2, '0')}
                    </motion.div>
                    
                    <motion.div 
                      className="time-separator"
                      animate={{ opacity: [0, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      :
                    </motion.div>
                    
                    <motion.div 
                      className="time-segment minutes"
                      animate={{ 
                        textShadow: [
                          '0 0 5px rgba(245, 158, 11, 0.5)',
                          '0 0 15px rgba(245, 158, 11, 0.8)',
                          '0 0 5px rgba(245, 158, 11, 0.5)'
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                    >
                      {time.getMinutes().toString().padStart(2, '0')}
                    </motion.div>
                    
                    <motion.div 
                      className="time-separator"
                      animate={{ opacity: [0, 1] }}
                      transition={{ repeat: Infinity, duration: 1, delay: 0.5 }}
                    >
                      :
                    </motion.div>
                    
                    <motion.div 
                      className="time-segment seconds"
                      animate={{ 
                        textShadow: [
                          '0 0 5px rgba(245, 158, 11, 0.5)',
                          '0 0 15px rgba(245, 158, 11, 0.8)',
                          '0 0 5px rgba(245, 158, 11, 0.5)'
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: 1
                      }}
                    >
                      {time.getSeconds().toString().padStart(2, '0')}
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="date-display"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                  >
                    {time.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Orbitron:wght@400;700&display=swap');
        
        .custom-react-clock {
          .react-clock__face {
            border: 2px solid #f59e0b;
          }
          
          .react-clock__mark__body {
            background-color: #f59e0b;
          }
          
          .react-clock__hour-hand__body {
            background-color: white;
          }
          
          .react-clock__minute-hand__body {
            background-color: white;
          }
          
          .react-clock__second-hand__body {
            background-color: #ef4444;
          }
        }
        
        .premium-digital-clock {
          background: rgba(25, 25, 35, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px 30px;
          border: 1px solid rgba(245, 158, 11, 0.3);
          box-shadow: 
            0 0 25px rgba(245, 158, 11, 0.2),
            inset 0 0 15px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-digital-clock::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #f59e0b, transparent);
          animation: scanline 8s linear infinite;
        }
        
        @keyframes scanline {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .clock-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
        }
        
        .time-segment {
          font-size: 3rem;
          background: linear-gradient(to bottom, #fde68a, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding: 5px 15px;
          border-radius: 10px;
          min-width: 80px;
          text-align: center;
          position: relative;
        }
        
        .time-segment::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 10px;
          border: 1px solid rgba(245, 158, 11, 0.5);
          pointer-events: none;
        }
        
        .time-separator {
          font-size: 3rem;
          color: #f59e0b;
          padding: 0 5px;
          animation: pulse 1s infinite;
        }
        
        @keyframes pulse {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        
        .date-display {
          text-align: center;
          font-family: 'Cinzel', serif;
          font-size: 1.2rem;
          color: #fde68a;
          margin-top: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #f59e0b;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #d97706;
        }
      `}</style>
    </div>
  );
};

export default UpchurchClockworksHeader;