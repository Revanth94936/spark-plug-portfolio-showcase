
import React from 'react';

interface SkillPillProps {
  name: string;
}

const SkillPill = ({ name }: SkillPillProps) => {
  return (
    <div className="px-4 py-2 bg-gray-100 rounded-full text-navy font-medium text-sm hover:bg-teal hover:text-white transition-colors duration-300 cursor-default">
      {name}
    </div>
  );
};

export default SkillPill;
