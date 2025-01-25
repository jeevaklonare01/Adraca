import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === tab.id
              ? 'text-purple-900 border-b-2 border-purple-900'
              : 'text-gray-500 hover:text-purple-900'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}