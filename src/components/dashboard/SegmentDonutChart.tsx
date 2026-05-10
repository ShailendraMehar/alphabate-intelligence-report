import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SEGMENTS } from '@/lib/report-data';
export function SegmentDonutChart() {
  return (
    <div className="h-[400px] w-full flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={SEGMENTS}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
            animationBegin={0}
            animationDuration={1500}
          >
            {SEGMENTS.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => [`${value}% Share`, 'Revenue']}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}