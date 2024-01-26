import React from 'react';
import ProgressBar from './ProgressBar';
import { TopPlatform } from '@/utils';




const TopPlatformTable = () => {
  return (
    <div className='w-full bg-white dark:bg-[#212121]  border-[1px] border-[#EDF2F7] dark:border-none rounded-2xl flex flex-col px-5 py-4 gap-5'>
            <div className='pt-5 flex justify-between'>
            <h2 className='text-base font-semibold font-plus-jakarta-sans text-body dark:text-[#fff]  '>Top Platform</h2>
            <h3 className='text-base font-medium font-plus-jakarta-sans text-mainColor-paid '>See All</h3>
             </div>
            <div className='flex flex-col gap-5'>
                {TopPlatform.map((item, index) => (
                    <div key={index}>
                        <h4 className='text-sm font-semibold font-plus-jakarta-sans text-body dark:text-[#aaa]'>{item.name}</h4>
                        <ProgressBar value={50} max={100} className='bg-gray mt-4 w' barColor={item.color} borderRadius={8} height={10} />
                        <div className='mt-4 flex justify-between'>
                            <p className='text-xs font-medium font-plus-jakarta-sans text-neutral dark:text-[#aaa] '>{item.amount}</p>
                            <p className='text-xs font-medium font-plus-jakarta-sans text-neutral dark:text-[#aaa] '>{item.percentage}</p>
                        </div>
                    </div>
                
                ))}
               
            </div>
    </div>
  )
}

export default TopPlatformTable