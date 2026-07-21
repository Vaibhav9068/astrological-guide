import React from 'react';

export default function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-darkgold/60"></div>
      <div className="mx-4 flex items-center justify-center">
        {/* Elegant gold star/diamond shape */}
        <svg
          className="w-5 h-5 text-darkgold animate-spin-slow"
          style={{ animationDuration: '30s' }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2v20M2 12h20M5.636 5.636l12.728 12.728M5.636 19.364L18.364 5.636"
          />
          <circle cx="12" cy="12" r="3.5" fill="currentColor" className="text-primary" />
        </svg>
      </div>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-darkgold/60"></div>
    </div>
  );
}
