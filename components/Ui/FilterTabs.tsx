'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Tab = 'All' | 'Web development' | 'Branding' | 'ui/ux Design' | 'third party apps';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: Exclude<Tab, 'All'>;
  image: string;
  className: string;
}

const tabs: Tab[] = ['All', 'Web development', 'Branding', 'ui/ux Design', 'third party apps'];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Avon client management application',
    description: 'webapps . Web development',
    category: 'Web development',
    image: '/tab1.png',
    className: 'tab-bg-1',
  },
  {
    id: 2,
    title: 'Avon client management application',
    description: 'ui/ux design . Web development',
    category: 'Branding',
    image: '/tab2.png',
    className: 'tab-bg-2',
  },
  {
    id: 3,
    title: 'Avon client management application',
    description: 'webapps . Web development',
    category: 'ui/ux Design',
    image: '/tab1.png',
    className: 'tab-bg-3',
  },
  {
    id: 4,
    title: 'Avon client management application',
    description: 'ui/ux design . Web development',
    category: 'third party apps',
    image: '/tab1.png',
    className: 'tab-bg-4',
  },
];

const FilterTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('All');

  const filteredItems =
    activeTab === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeTab);

  return (
    <div className="pt-10 lg:pt-20 xl:pt-30 mx-auto px-4">
      {/* Tabs */}
      <div className="overflow-x-auto whitespace-nowrap mb-10 border-b pb-4 border-gray-200 dark:border-gray-700">
        <div className="flex justify-center gap-4 lg:gap-10 xl:gap-20 min-w-max">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-2 text-sm font-medium transition
                ${activeTab === tab ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Filtered Items */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              className={`w-full p-7 rounded-lg shadow-lg transition hover:shadow-xl text-white relative flex flex-col ${item.className}`}
              layout
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold max-w-sm">{item.title}</h3>
                <Image src="/tab-arrow.png" width={50} height={50} alt='' />
              </div>
              <p className="text-sm">
                {item.description
                  .split('.')
                  .filter(Boolean)
                  .map((part, i, arr) => (
                    <span key={i}>
                      {part.trim()}
                      {i < arr.length - 1 && (
                        <span className="text-xl font-bold px-2 align-middle">·</span>
                      )}
                    </span>
                  ))}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FilterTabs;
