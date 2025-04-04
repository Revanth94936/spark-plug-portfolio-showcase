
import React from 'react';

interface TimelineItemProps {
  period: string;
  title: string;
  company: string;
  description: string;
}

const TimelineItem = ({ period, title, company, description }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8 group">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 group-last:bg-transparent"></div>
      <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-teal"></div>
      <div className="text-sm text-gray-500 mb-1">{period}</div>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="text-navy/70 font-medium mb-2">{company}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TimelineItem;
