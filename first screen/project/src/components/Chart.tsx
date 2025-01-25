import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  title: string;
  type: 'line' | 'bar' | 'pie' | 'doughnut';
  data: ChartData<any>;
  options?: ChartOptions<any>;
}

const defaultOptions: ChartOptions<any> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const chartComponents = {
  line: Line,
  bar: Bar,
  pie: Pie,
  doughnut: Doughnut,
};

export function Chart({ title, type, data, options = {} }: ChartProps) {
  const ChartComponent = chartComponents[type];
  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-sm font-medium text-purple-900 mb-4">{title}</h3>
      <div className="w-full h-[300px]">
        <ChartComponent data={data} options={mergedOptions} />
      </div>
    </div>
  );
}