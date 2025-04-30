// components/Accordion.tsx
import React, { useState } from 'react';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto">
      {items.map((item, index) => {
        const isOpen = index === activeIndex;
        return (
          <div key={index} className="border-0 border-b border-gray-500 overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left py-6 flex justify-between items-center"
            >
              <span className="font-medium">{item.title}</span>
              <span className="text-xl font-bold transition-transform">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out text-[#ABABAB] overflow-hidden ${isOpen ? 'max-h-[500px] py-4' : 'max-h-0'
                }`}
            >
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
