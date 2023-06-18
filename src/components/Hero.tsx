import React from 'react';

type TProps = {
  className: string;
  children: React.ReactNode;
};

function Hero({ className, children }: TProps) {
  return <section className={className}>{children}</section>;
}

export default Hero;
