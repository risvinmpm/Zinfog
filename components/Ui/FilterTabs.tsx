'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'All' | 'Design' | 'Development' | 'Marketing';

interface PortfolioItem {
  id: number;
  title: string;
  category: Tab;
}

const tabs: Tab[] = ['All', 'Design', 'Development', 'Marketing'];

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Landing Page Design', category: 'Design' },
  { id: 2, title: 'E-commerce Website', category: 'Development' },
  { id: 3, title: 'SEO Campaign', category: 'Marketing' },
  { id: 4, title: 'Dashboard UI', category: 'Design' },
];

const FilterTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('All');

  const filteredItems = activeTab === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <div className="pt-10 lg:pt-20 xl:pt-30 mx-auto">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2 text-sm font-medium transition 
              ${activeTab === tab ? 'text-blue-600' : 'text-gray-600'}`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"
              />
            )}
          </button>
        ))}
      </div>

      {/* Filtered Items */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="p-4 border rounded shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FilterTabs;
