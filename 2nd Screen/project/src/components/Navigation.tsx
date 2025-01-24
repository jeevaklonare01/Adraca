import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight,
  ChevronLeft,
  BarChart3,
  LineChart,
  PieChart,
  Map,
  DollarSign,
  Calculator,
  Brain,
  Target,
  ClipboardList,
  Workflow,
  FileSpreadsheet,
  FileCheck,
  Layers,
  Table
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  children?: { icon: React.ReactNode; label: string; children?: { label: string }[] }[];
}

function NavItem({ icon, label, children }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubItem, setOpenSubItem] = useState<string | null>(null);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg"
      >
        {icon}
        <span className="flex-1 text-left">{label}</span>
        {children && (
          isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
        )}
      </button>
      
      {isOpen && children && (
        <div className="ml-4 mt-1 space-y-1">
          {children.map((child) => (
            <div key={child.label}>
              <button
                onClick={() => setOpenSubItem(openSubItem === child.label ? null : child.label)}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 rounded-lg"
              >
                {child.icon}
                <span className="flex-1 text-left">{child.label}</span>
                {child.children && (
                  openSubItem === child.label ? 
                    <ChevronDown className="w-3 h-3" /> : 
                    <ChevronRight className="w-3 h-3" />
                )}
              </button>
              
              {openSubItem === child.label && child.children && (
                <div className="ml-6 mt-1 space-y-1">
                  {child.children.map((subChild) => (
                    <button
                      key={subChild.label}
                      className="w-full flex items-center gap-2 px-4 py-1.5 text-xs text-gray-500 hover:bg-purple-50 rounded-lg"
                    >
                      <span className="flex-1 text-left">{subChild.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navigation() {
  const [isExpanded, setIsExpanded] = useState(true);

  const sections = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Descriptive",
      children: [
        { icon: <LineChart className="w-4 h-4" />, label: "Executive Summary" },
        { icon: <PieChart className="w-4 h-4" />, label: "Category Summary" },
        { icon: <Map className="w-4 h-4" />, label: "Regional Summary" },
        { icon: <DollarSign className="w-4 h-4" />, label: "Price - Market Landscape" },
        { icon: <Calculator className="w-4 h-4" />, label: "Price & Distribution" },
        { icon: <FileSpreadsheet className="w-4 h-4" />, label: "P&L" }
      ]
    },
    {
      icon: <Brain className="w-5 h-5" />,
      label: "Diagnostic",
      children: [
        { icon: <Target className="w-4 h-4" />, label: "Model Evaluation 1" },
        { icon: <Target className="w-4 h-4" />, label: "Model Evaluation 2" },
        { icon: <ClipboardList className="w-4 h-4" />, label: "Model Results" }
      ]
    },
    {
      icon: <Workflow className="w-5 h-5" />,
      label: "Predictive & Prescriptive",
      children: [
        { icon: <FileCheck className="w-4 h-4" />, label: "Optimization Guide" },
        { icon: <ClipboardList className="w-4 h-4" />, label: "Task Summary" },
        { icon: <Layers className="w-4 h-4" />, label: "Simulation/Optimization" },
        { icon: <FileSpreadsheet className="w-4 h-4" />, label: "Scenario Summary" },
        { 
          icon: <Table className="w-4 h-4" />, 
          label: "Scenario Review",
          children: [
            { label: "Scenario Overall Results" },
            { label: "MFG P&L Waterfall" },
            { label: "MFG P&L Tabular View" },
            { label: "Customer Waterfall" },
            { label: "Customer Tabular View" }
          ]
        }
      ]
    }
  ];

  return (
    <nav 
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-lg transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-16'
      } overflow-y-auto`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute right-2 top-2 p-1 rounded-full hover:bg-gray-100"
      >
        {isExpanded ? 
          <ChevronLeft className="w-4 h-4" /> : 
          <ChevronRight className="w-4 h-4" />
        }
      </button>
      
      <div className={`mt-12 space-y-2 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
        {sections.map((section) => (
          <NavItem
            key={section.label}
            icon={section.icon}
            label={section.label}
            children={section.children}
          />
        ))}
      </div>
    </nav>
  );
}