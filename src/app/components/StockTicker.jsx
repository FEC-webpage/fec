import React from 'react';

const stocks = [
  { symbol: 'NIFTY', value: '19,850.25', change: '+1.2%' },
  { symbol: 'SENSEX', value: '65,980.75', change: '+0.8%' },
  { symbol: 'BANKNIFTY', value: '44,250.50', change: '+1.5%' },
];

const StockTicker = () => (
  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex space-x-8 overflow-x-auto animate-ticker">
    {stocks.map((stock, idx) => (
      <div key={idx} className="flex items-center space-x-2 min-w-max">
        <span className="font-bold">{stock.symbol}</span>
        <span>{stock.value}</span>
        <span className={stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>{stock.change}</span>
      </div>
    ))}
  </div>
);

export default StockTicker; 