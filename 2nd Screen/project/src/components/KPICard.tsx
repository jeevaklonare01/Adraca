import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  metric: string;
  change: number;
  prefix?: string;
}

export function KPICard({ title, value, metric, change, prefix = '' }: KPICardProps) {
  const isPositive = change > 0;
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-sm text-gray-600 font-medium mb-2">{title}</h3>
      <div className="flex items-baseline gap-1">
        {prefix && <span className="text-2xl font-bold">{prefix}</span>}
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-sm text-gray-500">{metric}</span>
      </div>
      <div className="flex items-center mt-2">
        {isPositive ? (
          <ArrowUpIcon className="w-4 h-4 text-green-500" />
        ) : (
          <ArrowDownIcon className="w-4 h-4 text-red-500" />
        )}
        <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {Math.abs(change)}%
        </span>
        <span className="text-sm text-gray-500 ml-1">YoY</span>
      </div>
    </div>
  );
}