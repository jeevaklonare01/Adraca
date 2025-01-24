import React from 'react';
import { CandlestickChart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-purple-800 text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <CandlestickChart className="w-6 h-6" />
        <h1 className="text-xl font-semibold">Category Summary</h1>
      </div>
      <div className="text-sm">
        Last Refreshed Date: {new Date().toLocaleDateString()}
      </div>
    </header>
  );
}