import React from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { KPICard } from './components/KPICard';
import { LineChart } from './components/LineChart';
import { TreemapChart } from './components/TreemapChart';
import { Filters } from './components/Filters';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation />
      <Filters />
      
      <main className="ml-16 transition-all duration-300 px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <KPICard
            title="Sell Out Volume"
            value="348,940K"
            metric="Units"
            change={-12.85}
          />
          <KPICard
            title="Sell Out Value"
            value="302,631K"
            metric="Value"
            prefix="R$"
            change={-7.70}
          />
          <KPICard
            title="Sell Out Units"
            value="297,284K"
            metric="Units"
            change={-12.34}
          />
          <KPICard
            title="Avg Price Per Unit"
            value="1.02"
            metric="Per Unit"
            prefix="R$"
            change={5.30}
          />
        </div>

        <div className="space-y-6">
          <LineChart 
            title="Value Sales Analysis by Channel"
            className="w-full h-[300px]"
          />
          <LineChart 
            title="Value Sales - Performance among Brands/PPGs"
            className="w-full h-[300px]"
          />
          <TreemapChart 
            title="Value Sales Analysis by Brand"
            className="w-full h-[300px]"
          />
        </div>
      </main>
    </div>
  );
}

export default App;