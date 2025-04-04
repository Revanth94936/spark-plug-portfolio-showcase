
import React from 'react';

interface ToolCardProps {
  name: string;
  icon: React.ReactNode;
}

const ToolCard = ({ name, icon }: ToolCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="text-navy mb-2 text-3xl">
        {icon}
      </div>
      <h3 className="text-gray-700 font-medium text-sm">{name}</h3>
    </div>
  );
};

export default ToolCard;
