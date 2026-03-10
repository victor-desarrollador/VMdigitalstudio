import React from 'react';

export const PageContainer = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export const PageSection = ({
  children,
  className = '',
  id,
}) => {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
};

export const GlassCard = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white/80 backdrop-blur-xl rounded-2xl border border-[#E5E7EB]/80 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

