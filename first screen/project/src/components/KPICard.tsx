import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  subtitle: string;
  change: number;
  isPositive?: boolean;
}

export function KPICard({ title, value, subtitle, change, isPositive = false }: KPICardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex flex-col">
        <span className="text-sm text-purple-900 font-medium">{title}</span>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-2xl font-bold">{value}</span>
          <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span>{Math.abs(change)}%</span>
          </div>
        </div>
        <span className="text-xs text-gray-500 mt-1">{subtitle}</span>
      </div>
    </div>
  );
}