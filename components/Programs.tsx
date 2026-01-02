import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Program } from '../types';
import { BookOpen, Cpu, Users, Globe } from 'lucide-react';

const programs: (Program & { icon: React.ElementType, gradient: string, iconColor: string })[] = [
  {
    title: "Global Teacher Foundation",
    description: "Become a confident, creative, global-ready educator.",
    icon: Globe,
    gradient: "from-teal-400 to-cyan-500",
    iconColor: "text-teal-600"
  },
  {
    title: "AI Classroom Mastery",
    description: "Teach smarter with modern AI-powered tools.",
    icon: Cpu,
    gradient: "from-lime-400 to-green-500",
    iconColor: "text-lime-600"
  },
  {
    title: "International Leadership",
    description: "Grow into leadership roles beyond borders.",
    icon: Users,
    gradient: "from-sky-400 to-blue-500",
    iconColor: "text-sky-600"
  },
  {
    title: "English Proficiency (EPT)",
    description: "Communicate clearly and professionally.",
    icon: BookOpen,
    gradient: "from-blue-500 to-indigo-500",
    iconColor: "text-indigo-600"
  }
];

export const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Global Programs</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Top Gradient Bar (mimicking the solid colors of grid posts) */}
              <div className={`h-2 w-full bg-gradient-to-r ${program.gradient}`} />
              
              <div className="p-8">
                <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className={`w-7 h-7 ${program.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{program.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-6">{program.description}</p>
                
                <a href="#" className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${program.gradient} flex items-center`}>
                  Learn more <span className="ml-1 text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              
              {/* Subtle gradient hover wash */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="ghost" icon>View All Programs</Button>
        </div>
      </div>
    </section>
  );
};