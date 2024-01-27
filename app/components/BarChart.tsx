'use client'
import React, {useState} from 'react'
import BarCharts from './BarCharts'
import { data, weeklyData, yearlyData } from '@/utils';



  

const BarChart = () => {
    const [selectedView, setSelectedView] = useState('monthly');

    const handleViewChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedView(event.target.value);
    };
  
    const getDataByView = () => {
      switch (selectedView) {
        case 'weekly':
          return weeklyData;
        case 'yearly':
          return yearlyData;
        default:
          return data; // Default to the original data
      }
    };
  return (
    <div className='w-full bg-white dark:bg-[#212121] dark:border-none  border-[1px] border-[#EDF2F7] overflow-x-auto   rounded-2xl'>
          
             <div className='w-full h-[60vh]  flex flex-col px-2 sm:px-5 py-4 gap-3 sm:gap-5'>
             <div className='pt-5 flex justify-between'>
            <h2 className='text-sm sm:text-base font-semibold font-plus-jakarta-sans text-body dark:text-[#fff] '>Top Platform</h2>
            <div className='flex gap-2 items-center'>
            <h3 className='text-sm sm:text-base font-medium font-plus-jakarta-sans text-mainColor-paid '>sort by: </h3>
            <select name="sorting" value={selectedView} onChange={handleViewChange} id="sort" className='bg-transparent py-1 px-2.5 border-[1px] border-[#E1DFDF] rounded-full'>
                <option value="weekly" className='bg-gray-200 text-xs sm:text-base hover:bg-gray-300 px-4'>Weekly</option>
                <option value="monthly" className='bg-gray-200 text-xs sm:text-base hover:bg-gray-300 px-4'>Monthly</option>
                <option value="yearly" className='bg-gray-200 text-xs sm:text-base hover:bg-gray-300 px-4'>Yearly</option>
            </select>

            </div>
           
             </div>
             
              <BarCharts data={getDataByView()} />
            
               
                
             </div>
         
        </div>
  )
}

export default BarChart