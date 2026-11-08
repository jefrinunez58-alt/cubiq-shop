import React from 'react';
import type { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = ({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]';
  
  const variants = {
    primary: 'bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-md focus-visible:ring-violet-500',
    secondary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md focus-visible:ring-blue-500',
    outline: 'border border-slate-300 bg-white hover:border-violet-300 hover:bg-violet-50 text-slate-800 focus-visible:ring-violet-500',
    ghost: 'hover:bg-slate-100 text-slate-800 focus-visible:ring-slate-400',
    dark: 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm focus-visible:ring-slate-700'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm sm:text-base',
    lg: 'px-6 py-3.5 text-base'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
