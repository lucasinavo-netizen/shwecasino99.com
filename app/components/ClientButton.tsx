'use client';

import { MouseEventHandler } from 'react';

interface ClientButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function ClientButton({ 
  onClick, 
  children, 
  className = '',
  variant = 'primary' 
}: ClientButtonProps) {
  const baseClass = variant === 'primary'
    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900'
    : 'border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-red-900';
  
  return (
    <button
      onClick={onClick}
      className={`${baseClass} px-6 py-2 rounded font-bold text-sm hover:shadow-lg transition-all ${className}`}
    >
      {children}
    </button>
  );
}

