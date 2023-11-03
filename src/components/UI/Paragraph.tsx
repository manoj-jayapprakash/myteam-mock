import React from 'react';

function Paragraph({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-base xl:text-lg font-light ${className}`}>{children}</p>
  );
}

export default Paragraph;
