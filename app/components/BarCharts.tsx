'use client'
import React, { PureComponent } from 'react';
import { BarChart, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle, XAxis, YAxis } from 'recharts';

interface BarChartsProps {
  data: { name: string; value: number }[];
}


const BarCharts: React.FC<BarChartsProps> = ({data}) => {
  const maxValue = Math.max(...data.map(item => item.value));


  const yAxisUpperBound = maxValue + 5000;

    return (
      <ResponsiveContainer width="100%" height="100%">
       <BarChart
          width={400}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
         
        >
          <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name"  axisLine={false} tickLine={false} tick={{fontSize: 10 }} tickMargin={20}   />
          <Tooltip />
          <YAxis tickCount={11} tick={{fontSize: 10 }}  domain={[0, yAxisUpperBound]} axisLine={false} tickLine={false} tickMargin={20} />
          <Bar
            dataKey="value"
            fill="url(#colorGradient)"
            shape={<CustomBar />}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34CAA5" />
              <stop offset="100%" stopColor="rgba(52, 202, 165, 0.00)" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    );
  
}

export default BarCharts


const CustomBar = ({ x, y, width, height }:any) => (
  <Rectangle
    x={x}
    y={y}
    width={width}
    height={height}
    radius={[20, 20, 0, 0]} 
    fill="url(#colorGradient)"
  />
);
