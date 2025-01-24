import React from 'react';

interface TreemapChartProps {
  title: string;
  className?: string;
}

interface TreemapItem {
  name: string;
  value: number;
  color: string;
  growth: number;
  share: string;
}

export function TreemapChart({ title, className = '' }: TreemapChartProps) {
  const data: TreemapItem[] = [
    { name: 'TANG', value: 41.79, color: '#4A148C', growth: -9.84, share: 'Value Share: 41.79%' },
    { name: 'FRISCO', value: 14.33, color: '#D81B60', growth: 5.88, share: 'Value Share: 14.33%' },
    { name: 'TRINK', value: 9.17, color: '#757575', growth: -9.52, share: 'Value Share: 9.17%' },
    { name: 'MID', value: 7.53, color: '#1976D2', growth: -8.27, share: 'Value Share: 7.53%' },
    { name: 'OUTRA MARCA', value: 4.49, color: '#6A1B9A', growth: 0, share: 'Value Share: 4.49%' },
    { name: 'FRESH', value: 3.89, color: '#43A047', growth: 0, share: 'Value Share: 3.89%' },
    { name: 'CLIGHT', value: 3.12, color: '#FFB300', growth: 0, share: 'Value Share: 3.12%' },
    { name: 'VILMA', value: 2.89, color: '#5D4037', growth: 0, share: 'Value Share: 2.89%' },
    { name: 'MARATA', value: 2.45, color: '#388E3C', growth: 0, share: 'Value Share: 2.45%' }
  ];

  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
      <h3 className="text-sm font-medium text-gray-700 mb-6">{title}</h3>
      <div className="relative h-[300px]">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-1">
          {data.map((item, index) => {
            const size = (item.value / totalValue) * 100;
            let colSpan = 1;
            let rowSpan = 1;

            // Custom sizing logic based on value share
            if (size > 30) { // TANG
              colSpan = 4;
              rowSpan = 3;
            } else if (size > 10) { // FRISCO
              colSpan = 2;
              rowSpan = 3;
            } else if (size > 7) { // TRINK, MID
              colSpan = 2;
              rowSpan = 1;
            } else { // Others
              colSpan = 1;
              rowSpan = 1;
            }

            return (
              <div
                key={item.name}
                className="relative group cursor-pointer overflow-hidden"
                style={{
                  backgroundColor: item.color,
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`
                }}
              >
                <div className="absolute inset-0 p-3 flex flex-col">
                  <div className="text-white">
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="text-xs opacity-90">{item.share}</div>
                    {item.growth !== 0 && (
                      <div className={`text-xs mt-1 ${item.growth > 0 ? 'text-green-300' : 'text-red-300'}`}>
                        YoY Value Sales Growth: {item.growth > 0 ? '+' : ''}{item.growth.toFixed(2)}%
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}