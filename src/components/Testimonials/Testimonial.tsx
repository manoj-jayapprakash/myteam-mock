import Paragraph from 'components/UI/Paragraph';
import React from 'react';

function Testimonial({
  testimonial,
  children,
}: {
  testimonial: string;
  children: React.ReactNode;
}) {
  return (
    <article className="flex flex-col justify-between h-full gap-4">
      <blockquote className="text-center">
        <Paragraph>{testimonial}</Paragraph>
      </blockquote>
      {children}
    </article>
  );
}

export default Testimonial;
