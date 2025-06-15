'use client';

import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  location: string;
}

interface TestimonialsSectionProps {
  activeTestimonial: number;
  setActiveTestimonial: (index: number) => void;
}

const TestimonialsSection = ({ activeTestimonial, setActiveTestimonial }: TestimonialsSectionProps) => {
  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      text: "Ryan did an amazing job restoring my grandmother's mantle clock. It works perfectly now and looks beautiful. Professional service at a fair price!",
      rating: 5,
      location: "Killeen, TX"
    },
    {
      name: "Michael Davis",
      text: "Excellent service! My antique grandfather clock hadn't run in 20+ years. Ryan arrived on time and gave a complete description of the repairs needed.",
      rating: 5,
      location: "Temple, TX"
    },
    {
      name: "Patricia Wilson",
      text: "Upchurch Clockworks brought my family heirloom back to life. The attention to detail and craftsmanship is outstanding. Highly recommended!",
      rating: 5,
      location: "Harker Heights, TX"
    }
  ];

  return (
    <section ref={testimonialsRef} id="testimonials" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400 font-cinzel">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied customers across Central Texas
          </p>
        </motion.div>

        {/* Desktop Testimonials */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all duration-300 h-full"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6 italic text-lg leading-relaxed">&quot;{testimonial.text}&quot;</blockquote>
              <div className="mt-auto">
                <p className="text-amber-400 font-semibold">— {testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Testimonials Carousel */}
        <div className="md:hidden relative h-96 overflow-hidden">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              activeTestimonial === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 absolute inset-0"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">&quot;{testimonial.text}&quot;</blockquote>
                  <div className="mt-auto">
                    <p className="text-amber-400 font-semibold">— {testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === index ? 'bg-amber-500 w-6' : 'bg-gray-600'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;