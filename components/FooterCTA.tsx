import React, { useState } from 'react';
import { Button } from './ui/Button';

export const FooterCTA: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer>
        {/* Split CTA */}
        <section className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-16 lg:p-24 flex flex-col justify-center items-start text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <span className="text-teal-200 font-bold tracking-widest text-sm uppercase mb-4 relative z-10">Teachers</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Start your journey toward global opportunities.</h2>
                <Button variant="primary" className="bg-white text-teal-700 hover:bg-teal-50 hover:shadow-none border-none relative z-10">Become a Global Teacher</Button>
            </div>
            <div className="bg-gradient-to-br from-sky-600 to-indigo-700 text-white p-16 lg:p-24 flex flex-col justify-center items-start text-left relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                <span className="text-sky-200 font-bold tracking-widest text-sm uppercase mb-4 relative z-10">Schools</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Build a reliable, classroom-ready teacher pipeline.</h2>
                <Button variant="secondary" className="bg-white text-indigo-700 hover:bg-indigo-50 hover:shadow-none border-none relative z-10">Partner With Teacheristic</Button>
            </div>
        </section>
        
        {/* Simple Footer */}
        <div className="bg-white py-12 border-t border-slate-100">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                 <div className="flex-shrink-0">
                    {logoError ? (
                       <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">TEACHERISTIC</span>
                    ) : (
                      <img 
                        src="/logo.png" 
                        alt="Teacheristic" 
                        className="h-8 w-auto" 
                        onError={() => setLogoError(true)}
                      />
                    )}
                 </div>
                 <div className="text-slate-500 text-sm">
                     &copy; {new Date().getFullYear()} Teacheristic. All rights reserved.
                 </div>
                 <div className="flex gap-6 text-sm font-medium text-slate-600">
                     <a href="#" className="hover:text-teal-600">Privacy</a>
                     <a href="#" className="hover:text-teal-600">Terms</a>
                     <a href="#" className="hover:text-teal-600">Contact</a>
                 </div>
             </div>
        </div>
    </footer>
  );
};