import React from 'react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Growth That Speaks for Itself.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Teacher Quote */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-3xl relative"
            >
                <div className="text-6xl text-teal-200 absolute top-4 left-6 font-serif">"</div>
                <p className="text-xl text-slate-700 font-medium italic relative z-10 mb-6 mt-4">
                    Teacheristic helped me understand my strengths and gave me a clear path to grow.
                </p>
                <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold">T</div>
                     <div>
                        <div className="text-sm font-bold text-slate-900">Sarah J.</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Teacher</div>
                     </div>
                </div>
            </motion.div>

            {/* School Quote */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-3xl relative"
            >
                <div className="text-6xl text-indigo-200 absolute top-4 left-6 font-serif">"</div>
                <p className="text-xl text-slate-700 font-medium italic relative z-10 mb-6 mt-4">
                    Every teacher we met was prepared, confident, and ready for the classroom.
                </p>
                <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">P</div>
                     <div>
                        <div className="text-sm font-bold text-slate-900">Principal Davis</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Partner School</div>
                     </div>
                </div>
            </motion.div>
        </div>

        {/* Minimal Blogs */}
        <div className="border-t border-slate-100 pt-16">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Latest Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['The Future of Teaching Careers', 'Smarter Matching for Schools', 'Creative Teaching for Today'].map((title, i) => (
                    <a key={i} href="#" className="group block">
                        <h4 className="text-lg font-semibold text-slate-800 group-hover:text-teal-600 transition-colors mb-2">
                            {title}
                        </h4>
                        <span className="text-sm text-slate-500 group-hover:underline">Read Article &rarr;</span>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};