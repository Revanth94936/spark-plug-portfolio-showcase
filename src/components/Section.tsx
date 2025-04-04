
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section = ({ id, title, children, className, titleClassName }: SectionProps) => {
  return (
    <section id={id} className={cn("py-16 scroll-mt-20", className)}>
      <div className="container mx-auto px-4">
        <h2 className={cn("text-3xl font-bold mb-10 text-navy relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-teal", titleClassName)}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
