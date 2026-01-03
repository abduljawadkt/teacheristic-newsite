import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

interface SegmentProps {
  onOpenForm: () => void;
}

export const TeacherSegment: React.FC<SegmentProps> = ({ onOpenForm }) => {
  return (
    <section id="teachers" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Lime/Teal gradient blob from "Your teaching degree" post */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lime-50/50 to-teal-50/50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-lime-600 font-bold tracking-wider text-sm uppercase mb-2 block">For Teachers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Teaching Career Deserves <span className="text-teal-600">Clarity.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              If your teaching career feels uncertain or stuck, you’re not alone.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We help you build confidence, learn modern skills, and follow a mapped path to global opportunities — step by step.
            </p>
            <Button 
              variant="outline" 
              className="border-teal-200 text-teal-700 hover:bg-teal-50" 
              icon
              onClick={onOpenForm}
            >
              Start My Journey
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
             {/* Styled like the cut-out posts but with container */}
             <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                 alt="Professional teacher in business attire looking confident" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
             </div>
             {/* Decorative Elements matching grid */}
             <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-teal-200 rounded-3xl"></div>
             <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-lime-300 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const SchoolSegment: React.FC<SegmentProps> = ({ onOpenForm }) => {
  return (
    <section id="schools" className="py-24 bg-white relative overflow-hidden">
       {/* Subtle Sky/Blue gradient blob from "Prepare for what's next" post */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-sky-50/50 to-indigo-50/50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative lg:order-1 order-2"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1507537297725-24a1c434c67b?q=80&w=800&auto=format&fit=crop" 
                 alt="Professional male teacher in a suit presenting" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>
            <div className="absolute -z-10 -top-6 -left-6 w-full h-full bg-sky-200 rounded-3xl"></div>
             <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-blue-300 rounded-full blur-2xl"></div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-2 order-1"
          >
            <span className="text-sky-600 font-bold tracking-wider text-sm uppercase mb-2 block">For Schools</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Hire Teachers Who Are Truly <span className="text-blue-600">Ready.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Finding skilled, dependable teachers shouldn’t be difficult.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We prepare and assess educators through a structured readiness system — giving you candidates who are confident and trained.
            </p>
            <Button variant="secondary" icon onClick={onOpenForm}>Partner With Teacheristic</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};