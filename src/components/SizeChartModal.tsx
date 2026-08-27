import React, { useState } from 'react';
import { sizeChartsData } from '../data/sizeCharts';

interface SizeChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const SizeChartModal: React.FC<SizeChartModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'shirts'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    sizeChartsData[defaultCategory] ? defaultCategory : 'shirts'
  );
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  if (!isOpen) return null;

  const currentChart = sizeChartsData[selectedCategory] || sizeChartsData.shirts;

  return (
    <div id="size-chart-modal" className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-2xl bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Top Header */}
          <div>
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-[#F9F9F9]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#606041]">
                  Fit &amp; Sizing Intelligence
                </span>
                <h2 className="font-serif text-2xl text-[#1C1C1C] mt-0.5">
                  Garment Size Guide
                </h2>
              </div>
              <button
                id="close-size-modal-btn"
                type="button"
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-black transition-colors"
                aria-label="Close Size Chart"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Category Selector Tabs */}
            <div className="flex border-b border-gray-200 overflow-x-auto hide-scrollbar bg-white px-6">
              {Object.keys(sizeChartsData).map((catKey) => {
                const chart = sizeChartsData[catKey];
                const isActive = selectedCategory === catKey;
                return (
                  <button
                    key={catKey}
                    id={`size-tab-${catKey}-btn`}
                    type="button"
                    onClick={() => setSelectedCategory(catKey)}
                    className={`py-3 px-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all ${
                      isActive
                        ? 'border-black text-black'
                        : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
                    }`}
                  >
                    {chart.category}
                  </button>
                );
              })}
            </div>

            {/* Unit Switcher Bar */}
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Display Measurement Units:
              </span>
              <div className="inline-flex border border-gray-300 bg-white p-0.5">
                <button
                  id="unit-toggle-in-btn"
                  type="button"
                  onClick={() => setUnit('in')}
                  className={`px-3 py-1 text-xs font-bold transition-all ${
                    unit === 'in'
                      ? 'bg-[#1C1C1C] text-white shadow-xs'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  INCHES (IN)
                </button>
                <button
                  id="unit-toggle-cm-btn"
                  type="button"
                  onClick={() => setUnit('cm')}
                  className={`px-3 py-1 text-xs font-bold transition-all ${
                    unit === 'cm'
                      ? 'bg-[#1C1C1C] text-white shadow-xs'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  CENTIMETERS (CM)
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Body Table */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Table */}
            <div className="border border-gray-200 overflow-x-auto shadow-xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#1C1C1C] text-white uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="p-3.5 font-semibold">Measurement</th>
                    {currentChart.sizes.map((sz) => (
                      <th key={sz} className="p-3.5 text-center font-bold">
                        {sz}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700">
                  {currentChart.measurements.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                      <td className="p-3.5 font-semibold text-gray-900 bg-gray-50/50">
                        {row.parameter}
                      </td>
                      {currentChart.sizes.map((sz, colIdx) => {
                        const val =
                          unit === 'in'
                            ? `${row.unitInches[colIdx]}"`
                            : `${row.unitCm[colIdx]} cm`;
                        return (
                          <td key={sz} className="p-3.5 text-center font-medium text-gray-800">
                            {val}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Measuring Instructions */}
            <div className="bg-[#F5F5F0] p-5 border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#606041]">straighten</span>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#1C1C1C]">
                  How to Measure Garment Flat
                </h3>
              </div>
              <div className="space-y-2.5 text-xs text-gray-700 leading-relaxed">
                {currentChart.howToMeasure.map((m, i) => (
                  <div key={i} className="flex gap-2">
                    <strong className="text-black min-w-[70px]">{m.step}:</strong>
                    <span>{m.instruction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fit Advice */}
            <div className="p-4 bg-white border-l-3 border-[#606041] border border-gray-200 text-xs text-gray-700 leading-relaxed">
              <strong className="text-black">Fit Recommendation: </strong>
              {currentChart.fitAdvice}
            </div>

            {/* 7-Day Guarantee Callout */}
            <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
              <span className="material-symbols-outlined text-emerald-700">security</span>
              <span>
                <strong>100% Size Peace of Mind:</strong> If it does not fit like a glove, we provide free doorstep pickup &amp; size swap within 7 days.
              </span>
            </div>

          </div>

          {/* Bottom Action */}
          <div className="p-4 border-t border-gray-200 bg-gray-50 flex gap-3">
            <button
              id="confirm-size-chart-btn"
              type="button"
              onClick={onClose}
              className="w-full bg-[#1C1C1C] text-white py-3.5 text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
            >
              Back to Product Selection
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
