'use client';

import { Clock, Wrench, Home } from 'lucide-react';

const Footer = () => {
  const services = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Clock Repair & Restoration",
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "House Calls",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Complete Restoration",
    }
  ];

  return (
    <footer className="py-12 px-4 border-t border-amber-500/20 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4 font-cinzel">Upchurch Clockworks</h3>
            <p className="text-gray-400">
              Expert clock repair and restoration services in Central Texas
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:2548569395" className="hover:text-amber-400 transition-colors">
                  (254) 856-9395
                </a>
              </li>
              <li>Killeen, TX</li>
              <li>By Appointment</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-amber-500/20 text-center">
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} Upchurch Clockworks - All Rights Reserved
          </p>
          <p className="text-amber-400 font-cinzel italic mb-4">
            "Preserving Time's Legacy"
          </p>
          <p className="text-xs">
            <a
              href="https://xtremery.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse hover:animate-shimmer"
            >
              Precision-timed and pixel-polished by Xtremery · Deland, FL
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;