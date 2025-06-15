'use client';

import { useEffect, useState } from 'react';
import HeroSection from './components/Hero';
import ServicesSection from './components/Services';
import AboutSection from './components/About';
import TestimonialsSection from './components/Testimonials';
import ContactSection from './components/Contact';

const HomePage = () => {
  const [time, setTime] = useState(new Date());
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3); // 3 testimonials
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection time={time} />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection 
        activeTestimonial={activeTestimonial} 
        setActiveTestimonial={setActiveTestimonial} 
      />

      {/* Contact Section */}
      <ContactSection />

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
        
        .font-cinzel {
          font-family: 'Cinzel', serif;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default HomePage;