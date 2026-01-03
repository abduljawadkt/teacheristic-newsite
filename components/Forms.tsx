import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Backdrop: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClick}
    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto"
  >
    {children}
  </motion.div>
);

const ModalContent: React.FC<{ children: React.ReactNode; theme: 'teal' | 'blue' }> = ({ children, theme }) => {
  const borderClass = theme === 'teal' ? 'border-teal-200' : 'border-sky-200';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      onClick={(e) => e.stopPropagation()}
      className={`bg-white rounded-3xl shadow-2xl w-full max-w-lg relative overflow-hidden border ${borderClass}`}
    >
      {children}
    </motion.div>
  );
};

export const TeacherFormModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <ModalContent theme="teal">
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {submitted ? (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on your way!</h3>
                <p className="text-slate-600">We've received your details. A career specialist will be in touch shortly.</p>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-8 text-white">
                  <span className="text-teal-100 font-bold tracking-wider text-xs uppercase mb-2 block">For Teachers</span>
                  <h3 className="text-2xl font-bold mb-2">Join the Global Pool</h3>
                  <p className="text-teal-50 text-sm">Start your journey towards better schools and higher pay.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input type="text" required className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input type="email" required className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Current Role</label>
                    <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white">
                      <option>Aspiring Teacher</option>
                      <option>Early Career (1-3 years)</option>
                      <option>Experienced (3+ years)</option>
                    </select>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="primary" className="w-full justify-center" type="submit">
                      Get Started <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-center text-slate-400">
                    No spam. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            )}
          </ModalContent>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export const SchoolFormModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <ModalContent theme="blue">
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {submitted ? (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                <p className="text-slate-600">Our partnership team will review your requirements and contact you within 24 hours.</p>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-8 text-white">
                  <span className="text-sky-100 font-bold tracking-wider text-xs uppercase mb-2 block">For Schools</span>
                  <h3 className="text-2xl font-bold mb-2">Find Ready Teachers</h3>
                  <p className="text-sky-50 text-sm">Tell us your hiring needs and access our pre-vetted talent pool.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">School Name</label>
                    <input type="text" required className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" placeholder="Global Academy" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Contact Email</label>
                    <input type="email" required className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" placeholder="hiring@school.edu" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Hiring Needs</label>
                    <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white">
                      <option>Urgent / Immediate Start</option>
                      <option>Planning for Next Term</option>
                      <option>Building Talent Pipeline</option>
                    </select>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="secondary" className="w-full justify-center" type="submit">
                      Request Partnership Info <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </ModalContent>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};
