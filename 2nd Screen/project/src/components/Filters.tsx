import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Filters() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside 
      className={`fixed right-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-lg transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-1'
      } group hover:w-64`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`p-4 ${isExpanded ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity duration-300`}>
        <h2 className="font-medium text-gray-700 mb-4">Filters</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Year</label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
              <option>2021</option>
              <option>2022</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Quarter</label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
              <option>All</option>
              <option>Q1</option>
              <option>Q2</option>
              <option>Q3</option>
              <option>Q4</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Month</label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
              <option>All</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}