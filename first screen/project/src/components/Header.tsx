import React from 'react';
import { CandyIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-purple-900 text-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <CandyIcon size={24} />
        <h1 className="text-xl font-semibold">Executive Summary</h1>
      </div>
      <div className="text-sm">
        Last Refreshed Date: 11/30/2022
      </div>
    </header>
  );
}