import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    // Teal -> Cyan gradient (Top Left / Bottom Center vibes)
    primary: "bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/25 focus:ring-cyan-500 border-none",
    
    // Blue -> Indigo gradient (Top Right / Bottom Right vibes)
    secondary: "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 focus:ring-blue-500 border-none",
    
    outline: "border-2 border-slate-200 text-slate-700 hover:border-teal-500 hover:text-teal-600 bg-transparent hover:bg-teal-50/50",
    ghost: "text-slate-600 hover:text-teal-600 bg-transparent hover:bg-teal-50 px-4 py-2",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};