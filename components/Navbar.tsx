import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex-shrink-0 flex items-center">
            {logoError ? (
               <span className={`text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600`}>
                TEACHERISTIC
              </span>
            ) : (
              <img 
                src="/logo.png" 
                alt="Teacheristic" 
                className="h-8 md:h-10 w-auto" 
                onError={() => setLogoError(true)}
              />
            )}
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#teachers" className="text-slate-600 hover:text-teal-600 transition-colors font-medium">For Teachers</a>
          <a href="#schools" className="text-slate-600 hover:text-teal-600 transition-colors font-medium">For Schools</a>
          <a href="#programs" className="text-slate-600 hover:text-teal-600 transition-colors font-medium">Programs</a>
          <Button variant="ghost" className="!px-4">Log In</Button>
          <Button variant="primary" className="!px-6 !py-2 text-sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 hover:text-teal-600">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full px-4 py-6 shadow-xl flex flex-col space-y-4">
          <a href="#teachers" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">For Teachers</a>
          <a href="#schools" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">For Schools</a>
          <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">Programs</a>
          <hr />
          <Button variant="ghost" className="w-full justify-start">Log In</Button>
          <Button variant="primary" className="w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};