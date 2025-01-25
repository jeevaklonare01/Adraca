import React, { useState } from 'react';
import { Header } from './components/Header';
import { KPICard } from './components/KPICard';
import { Chart } from './components/Chart';
import { Tabs } from './components/Tabs';
import { Filters } from './components/Filters';
import { Navigation } from './components/Navigation';

const tabs = [
  { id: 'descriptive', label: 'Descriptive' },
  { id: 'diagnostics', label: 'Diagnostics' },
  { id: 'predictive', label: 'Predictive & Prescriptive' }
];

const subTabs = [
  { id: 'category', label: 'Category Summary' },
  { id: 'regional', label: 'Regional Summary' },
  { id: 'price-market', label: 'Price-Market Landscape' },
  { id: 'price-distribution', label: 'Price & Distribution' },
  { id: 'price-evaluation', label: 'Price Evaluation' },
  { id: 'price-evolution', label: 'Price Evolution (Patterns)' },
  { id: 'pbl', label: 'PBL' }
];

// Chart data
const volumeMarketShareData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'MONDELEZ INTL',
      data: [40, 39.8, 39.5, 39.2, 39, 38.8, 38.9, 39, 38.8, 38.7, 38.9, 39],
      borderColor: '#5B21B6',
      backgroundColor: '#5B21B6',
      fill: false,
    },
    {
      label: '3 CORACOES',
      data: [15, 15.2, 15.5, 15.8, 15.7, 15.6, 15.4, 15.3, 15.2, 15.1, 15, 14.9],
      borderColor: '#8B5CF6',
      backgroundColor: '#8B5CF6',
      fill: false,
    },
    {
      label: 'MARATA',
      data: [8, 8.1, 8.3, 8.2, 8.4, 8.5, 8.3, 8.2, 8.1, 8, 7.9, 7.8],
      borderColor: '#A78BFA',
      backgroundColor: '#A78BFA',
      fill: false,
    }
  ]
};

const quarterAnalysisData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Value Sales',
      data: [80000000, 70000000, 60000000, 75000000],
      backgroundColor: [
        '#5B21B6',
        '#7C3AED',
        '#8B5CF6',
        '#A78BFA',
      ],
    }
  ]
};

const regionWiseData = {
  labels: ['AREA I', 'AREA II', 'AREA III', 'AREA IV', 'AREA V', 'AREA VI', 'AREA VII'],
  datasets: [
    {
      data: [13.20, 20.97, 15.33, 8.39, 10.15, 22.86, 9.44],
      backgroundColor: [
        '#5B21B6',
        '#7C3AED',
        '#8B5CF6',
        '#A78BFA',
        '#C4B5FD',
        '#DDD6FE',
        '#EDE9FE',
      ],
    }
  ]
};

const channelWiseData = {
  labels: ['C&C', 'Hyper', 'Super P', 'Super G', 'Traditional', 'Independents'],
  datasets: [
    {
      data: [21.20, 15.43, 3.74, 10.69, 17.10, 40.84],
      backgroundColor: [
        '#5B21B6',
        '#7C3AED',
        '#8B5CF6',
        '#A78BFA',
        '#C4B5FD',
        '#DDD6FE',
      ],
    }
  ]
};

const performanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Performance',
      data: [12000000, 13000000, 14000000, 13500000, 13000000, 12500000, 11000000, 10500000, 11000000, 12000000, 13000000, 14000000],
      borderColor: '#5B21B6',
      backgroundColor: 'rgba(91, 33, 182, 0.1)',
      fill: true,
    }
  ]
};

function App() {
  const [activeTab, setActiveTab] = useState('descriptive');
  const [activeSubTab, setActiveSubTab] = useState('category');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navigation />
      
      <div className="flex-1">
        <Header />
        
        <main className="p-4">
          <div className="mb-6">
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          <div className="mb-6">
            <Tabs tabs={subTabs} activeTab={activeSubTab} onTabChange={setActiveSubTab} />
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <KPICard
                title="Sell Out Volume"
                value="348,940K"
                subtitle="YoY: 67,201K"
                change={-12.85}
              />
              <KPICard
                title="Sell Out Value"
                value="R$302,631K"
                subtitle="YoY: R$56,410K"
                change={-7.70}
              />
              <KPICard
                title="Sell Out Units"
                value="297,284K"
                subtitle="YoY: 57,627K"
                change={-12.34}
              />
              <KPICard
                title="Avg Price Per Unit"
                value="R$1.02"
                subtitle="YoY: R$0.98"
                change={5.30}
                isPositive
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Chart 
                title="Volume Market Share"
                type="line"
                data={volumeMarketShareData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 50,
                      ticks: {
                        callback: value => `${value}%`
                      }
                    }
                  }
                }}
              />
              <Chart 
                title="Value Sales - Quarter Analysis"
                type="bar"
                data={quarterAnalysisData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        callback: value => `${value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
                      }
                    }
                  }
                }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Chart 
                title="Value Sales - Region Wise"
                type="doughnut"
                data={regionWiseData}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }}
              />
              <Chart 
                title="Value Sales - Channel Wise"
                type="doughnut"
                data={channelWiseData}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }}
              />
              <Chart 
                title="Value Sales - Performance over time"
                type="line"
                data={performanceData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        callback: value => `${value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
                      }
                    }
                  }
                }}
              />
            </div>
          </div>
        </main>
      </div>

      <Filters />
    </div>
  );
}

export default App;