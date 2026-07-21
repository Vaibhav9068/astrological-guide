import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-darkgold/15 rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-[0_4px_20px_rgba(107,15,26,0.02)]"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full py-5 px-6 flex justify-between items-center text-left transition-colors duration-300 hover:bg-bg-cream/20"
            >
              <span className="font-cinzel font-semibold text-black text-sm sm:text-base pr-4 leading-snug">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-maroon transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-96 border-t border-darkgold/5' : 'max-h-0'
              }`}
            >
              <div className="p-6 text-black/70 text-xs sm:text-sm leading-relaxed font-poppins bg-bg-cream/10">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
