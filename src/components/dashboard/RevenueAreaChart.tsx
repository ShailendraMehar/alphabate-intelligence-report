import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { REVENUE_TRENDS } from '@/lib/report-data';
export function RevenueAreaChart() {
  return (
    <div className="h-[400px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={REVENUE_TRENDS}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorSearch" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4285F4" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#4285F4" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorCloud" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34A853" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#34A853" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorYoutube" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EA4335" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#EA4335" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            tickFormatter={(value) => `$${value}B`}
          />
          <Tooltip
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              borderColor: 'hsl(var(--border))',
              borderRadius: '8px',
              fontSize: '12px'
            }}
          />
          <Legend verticalAlign="top" height={36} iconType="circle" />
          <Area
            type="monotone"
            dataKey="search"
            stroke="#4285F4"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorSearch)"
            stackId="1"
            name="Search"
          />
          <Area
            type="monotone"
            dataKey="cloud"
            stroke="#34A853"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorCloud)"
            stackId="1"
            name="Cloud"
          />
          <Area
            type="monotone"
            dataKey="youtube"
            stroke="#EA4335"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorYoutube)"
            stackId="1"
            name="YouTube"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}