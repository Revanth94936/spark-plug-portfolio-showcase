
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  name: string;
  icon: React.ReactNode | string;
  iconComponent?: LucideIcon;
}

const ToolCard = ({ name, icon, iconComponent: Icon }: ToolCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="text-navy mb-2 text-3xl">
        {Icon ? <Icon className="h-6 w-6" /> : icon}
      </div>
      <h3 className="text-gray-700 font-medium text-sm text-center">{name}</h3>
    </div>
  );
};

export default ToolCard;
