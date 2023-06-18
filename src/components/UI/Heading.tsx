import React from 'react';

type TProps = {
  type: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
};

function Heading({ type, children, className = '' }: TProps) {
  const headings = {
    h1: (
      <h1
        className={` text-4xl md:text-6xl lg:text-8xl font-bold ${className}`}
      >
        {children}
      </h1>
    ),
    h2: (
      <h2 className={` text-3xl lg:text-5xl font-bold ${className}`}>
        {children}
      </h2>
    ),
    h3: <h3 className={` text-lg font-bold ${className}`}>{children}</h3>,
  };

  return headings[type];
}

export default Heading;
