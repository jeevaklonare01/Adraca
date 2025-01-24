import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  title: string;
  className?: string;
}

export function LineChart({ title, className = '' }: LineChartProps) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: "'Inter', sans-serif",
            size: 11
          }
        }
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#374151',
        bodyColor: '#374151',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 12,
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 12
        },
        titleFont: {
          family: "'Inter', sans-serif",
          size: 12,
          weight: 'bold'
        },
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y.toLocaleString('pt-BR')}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.06)',
          drawBorder: false
        },
        border: {
          display: false
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11
          },
          padding: 8,
          callback: function(value: any) {
            return value.toLocaleString('pt-BR');
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11
          },
          padding: 8
        }
      }
    },
    elements: {
      line: {
        tension: 0.3,
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 8,
        hoverRadius: 4
      }
    }
  };

  const data = {
    labels: months,
    datasets: [
      {
        label: 'POWDERED BEVERAGES',
        data: [30000000, 29500000, 29000000, 27000000, 23000000, 22000000, 21500000, 22000000, 23500000, 25000000, 26000000, 27000000],
        borderColor: '#4299E1',
        backgroundColor: '#4299E1',
      },
      {
        label: 'Independente',
        data: [12000000, 12500000, 12000000, 11000000, 9500000, 9000000, 8500000, 9000000, 10000000, 10500000, 11000000, 11500000],
        borderColor: '#805AD5',
        backgroundColor: '#805AD5',
      },
      {
        label: 'Super G',
        data: [5000000, 5200000, 5000000, 4500000, 3800000, 3500000, 3200000, 3500000, 4000000, 4500000, 4800000, 5000000],
        borderColor: '#F56565',
        backgroundColor: '#F56565',
      }
    ]
  };

  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
      <h3 className="text-sm font-medium text-gray-700 mb-6">{title}</h3>
      <div className="h-[300px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}