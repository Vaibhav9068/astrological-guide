import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  glass = false,
  ...props
}) {
  return (
    <div
      className={`
        rounded-3xl p-6 sm:p-8 
        border border-darkgold/15
        ${glass ? 'bg-glass' : 'bg-white'}
        ${glow ? 'shadow-[0_0_20px_rgba(246,201,14,0.15)] hover:border-primary/50 hover:shadow-[0_0_30px_rgba(246,201,14,0.25)]' : 'shadow-[0_10px_35px_rgba(107,15,26,0.03)]'}
        ${hoverEffect ? 'hover:border-darkgold/40 transition-all duration-500 ease-out transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(107,15,26,0.08)]' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
