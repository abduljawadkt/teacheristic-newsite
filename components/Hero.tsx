import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Globe, ShieldCheck, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenTeacherForm?: () => void;
  onOpenSchoolForm?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTeacherForm, onOpenSchoolForm }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Gradient Background matching the Instagram Teal/Cyan/Lime vibes */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-sky-50 z-0" />
      
      {/* Abstract Shapes/Blobs */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-cyan-100/30 to-transparent pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Upward Arrows Pattern (From Bottom-Left Instagram Post) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M300 400L300 50M300 50L250 100M300 50L350 100" stroke="currentColor" strokeWidth="20" className="text-slate-900"/>
            <path d="M150 400L150 150M150 150L100 200M150 150L200 200" stroke="currentColor" strokeWidth="15" className="text-slate-900"/>
            <path d="M450 400L450 150M450 150L400 200M450 150L500 200" stroke="currentColor" strokeWidth="15" className="text-slate-900"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Where <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">Global-Ready</span> Teachers and <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">Future-Ready</span> Schools Meet.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-2 font-medium"
          >
            Training. Growth. Intelligent Matching.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto"
          >
            A complete career mapping ecosystem where teachers grow, schools hire better, and learning improves everywhere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Button variant="primary" icon onClick={onOpenTeacherForm}>I’m a Teacher</Button>
            <Button variant="secondary" icon onClick={onOpenSchoolForm}>I’m a School</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-medium"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-teal-500" /> Global growth
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-500" /> Verified readiness
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-teal-500" /> Smarter opportunities
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};