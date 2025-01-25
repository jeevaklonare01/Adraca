import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

export function Filters() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="fixed right-0 top-1/4 transition-all duration-300"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className={`
        flex
        transition-all duration-300
        ${isVisible ? 'translate-x-0' : 'translate-x-[calc(100%-2.5rem)]'}
      `}>
        <div className="bg-purple-900 p-2 text-white cursor-pointer">
          <SlidersHorizontal size={20} />
        </div>
        <div className="bg-white shadow-lg w-64 p-4">
          <h3 className="font-semibold text-purple-900 mb-4">Filters</h3>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Year</label>
              <select className="border rounded-md px-2 py-1 text-sm">
                <option>2021</option>
                <option>2022</option>
              </select>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Quarter</label>
              <select className="border rounded-md px-2 py-1 text-sm">
                <option>All</option>
                <option>Q1</option>
                <option>Q2</option>
                <option>Q3</option>
                <option>Q4</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Region</label>
              <select className="border rounded-md px-2 py-1 text-sm">
                <option>All</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}