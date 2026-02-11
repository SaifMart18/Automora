import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  const hoverClasses = hoverEffect 
    ? 'hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:border-brand-text/20 transition-all duration-300' 
    : '';

  return (
    <div className={`glass-panel rounded-2xl p-6 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;