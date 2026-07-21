import React from 'react';

export default function Button({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  className = '',
  href,
  type = 'button',
  ...props
}) {
  const baseStyle =
    'px-7 py-3 rounded-full font-cinzel font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-500 ease-out transform hover:-translate-y-0.5 shadow-sm hover:shadow-lg inline-flex items-center justify-center gap-2 border';

  const variants = {
    primary:
      'bg-gold-gradient text-black border-darkgold hover:border-maroon font-bold relative overflow-hidden group',
    secondary:
      'bg-maroon text-white border-maroon hover:bg-transparent hover:text-maroon hover:border-maroon',
    outline:
      'bg-transparent text-maroon border-maroon/40 hover:border-maroon hover:bg-maroon/5',
  };

  const shimmerEffect = variant === 'primary' ? (
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
  ) : null;

  const content = (
    <>
      {shimmerEffect}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
