'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactRef = useRef(null);
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" });

  return (
    <section ref={contactRef} id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isContactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400 font-cinzel">
            Schedule Your Service
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Contact us today for professional clock repair in Central Texas
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all"
            >
              <Phone className="w-8 h-8 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Call Us</h3>
              <a href="tel:2548569395" className="text-amber-400 text-lg hover:text-amber-300 transition-colors block mb-2">
                (254) 856-9395
              </a>
              <p className="text-gray-400 text-sm">Mon-Sat: 8am - 6pm</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all"
            >
              <MapPin className="w-8 h-8 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Service Area</h3>
              <p className="text-gray-300 mb-1">Killeen & Surrounding Areas</p>
              <p className="text-gray-400 text-sm">Temple, Harker Heights, Belton</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Premium In-Home Service</h3>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              We provide convenient mobile service for your valuable timepieces. 
              Schedule an appointment for expert assessment at your location.
            </p>
            <motion.a
              href="tel:2548569395"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-3 rounded-lg font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              Book House Call
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;