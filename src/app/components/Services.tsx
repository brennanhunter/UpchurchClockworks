'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Wrench, Home } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServicesSection = () => {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const services: Service[] = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Clock Repair & Restoration",
      description: "Expert repair services for all types of clocks including grandfather clocks, mantle clocks, wall clocks, and antique timepieces.",
      features: ["Movement Cleaning", "Gear Replacement", "Spring Repair", "Dial Restoration"]
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "House Calls",
      description: "Convenient in-home service for your valuable timepieces. Professional assessment and repair at your location.",
      features: ["On-Site Evaluation", "In-Home Repairs", "Pickup & Delivery", "Appointment Scheduling"]
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Complete Restoration",
      description: "Full restoration services to bring your cherished family heirlooms back to their original glory.",
      features: ["Case Refinishing", "Mechanism Overhaul", "Chime Adjustment", "Pendulum Calibration"]
    }
  ];

  return (
    <section ref={servicesRef} id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400 font-cinzel">
            Expert Clock Services
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive horological services with meticulous attention to detail
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all duration-300 group"
              whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.15)" }}
            >
              <div className="text-amber-500 mb-6 group-hover:text-amber-400 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-cinzel">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-amber-400 text-sm flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;