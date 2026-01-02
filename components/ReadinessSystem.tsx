import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Layers, Lightbulb, BarChart, Handshake } from 'lucide-react';

const steps = [
  {
    title: "Professional Readiness Lab",
    description: "Build your portfolio, demo lesson, and teaching identity.",
    icon: Layers
  },
  {
    title: "Creative Classroom Skills",
    description: "Learn modern, engaging teaching approaches.",
    icon: Lightbulb
  },
  {
    title: "Teacher Levels (A/B/C/D)",
    description: "A clear, transparent measure of readiness and capability.",
    icon: BarChart
  },
  {
    title: "Intelligent Matching",
    description: "Schools find teachers who fit — not just apply.",
    icon: Handshake
  }
];

export const ReadinessSystem: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden text-white">
        {/* Rich Gradient Background (Teal/Blue/Cyan mix) */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-sky-600 to-blue-700 z-0"></div>
        
        {/* Ripples Effect (From Bottom-Right Instagram Post) */}
        <div className="absolute -right-20 bottom-[-100px] opacity-20 pointer-events-none">
             <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
                 <circle cx="300" cy="300" r="100" stroke="white" strokeWidth="2" />
                 <circle cx="300" cy="300" r="150" stroke="white" strokeWidth="4" opacity="0.8" />
                 <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="8" opacity="0.6" />
                 <circle cx="300" cy="300" r="250" stroke="white" strokeWidth="16" opacity="0.4" />
                 <circle cx="300" cy="300" r="300" stroke="white" strokeWidth="32" opacity="0.2" />
             </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            A System That Builds and Reveals True Readiness.
          </motion.h2>
          <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-teal-50 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <button className="text-white hover:text-teal-200 font-bold inline-flex items-center transition-colors">
                See How It Works <Layers className="ml-2 w-4 h-4"/>
            </button>
        </div>
      </div>
    </section>
  );
};