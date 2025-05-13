import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { time: '9:30', value: 15000 },
  { time: '10:00', value: 15200 },
  { time: '10:30', value: 15100 },
  { time: '11:00', value: 15300 },
  { time: '11:30', value: 15400 },
];

const ChartSection = () => (
  <section className="w-full px-4 py-10 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
    <div className="max-w-6xl mx-auto bg-[var(--glass-bg)] rounded-xl shadow-lg p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4 text-center">
        Market Activity Chart
      </h2>
      <div className="h-72 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#cccccc30" />
            <XAxis dataKey="time" stroke="#888" tick={{ fill: '#94a3b8' }} />
            <YAxis stroke="#888" tick={{ fill: '#94a3b8' }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#0ea5e9' }}
              labelStyle={{ color: '#fcd34d' }}
              itemStyle={{ color: '#a5f3fc' }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0ea5e9"
              strokeWidth={3}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </section>
);

export default ChartSection;
