'use client'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: ''
    },
  },
  scales: {
    y: {
        beginAtZero: true,
        stepSize: 5000, 
      },
  }
};
  
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [7000, 18000, 7000, 27000, 8000, 45000, 9000, 22000, 35000, 7000, 40000, 35000], 
        backgroundColor: 'rgba(52, 202, 165, 0.10)',
        borderRadius: 20, 
      }
    
    ],
  };

const BarChart  = () => {
    

  return (
    <div className='w-auto bg-white border-[1px] border-[#EDF2F7] rounded-md md:rounded-2xl flex flex-col px-5 gap-5'>
         <div className='pt-5 flex justify-between'>
            <h2 className='text-base font-semibold font-plus-jakarta-sans text-body '>Sales Trend</h2>
            <h3 className='text-base font-medium font-plus-jakarta-sans text-mainColor-paid '>See All</h3>
             </div>
             <div>
             <Bar options={options} data={data} />
             
             </div>
    </div>
  )
}

export default BarChart