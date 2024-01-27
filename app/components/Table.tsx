'use client'
import React, {useState} from 'react'
import Image from 'next/image';
import { TableData } from '@/utils';
import DownloadIcon from './DownloadIcon';
import DownloadModal from './DownloadModal';


const Table = () => {
  const [showAll, setShowAll] = useState(false);
  const [downloadModal, setDownloadModal] = useState(false);
  const [data, setData] = useState(TableData);

  const showModal = (data: any) => {
    setData(data);
    setDownloadModal(true);
  }
  return (
    <div className='w-auto bg-white dark:bg-[#212121] border-[1px] border-[#EDF2F7] dark:border-none rounded-md md:rounded-2xl flex flex-col p-5 gap-5'>
        <div className='pt-5 flex justify-between'>
            <h2 className='text-sm sm:text-base font-semibold font-plus-jakarta-sans text-body dark:text-[#fff] '>Last Orders</h2>
            <button className='text-sm sm:text-base font-medium font-plus-jakarta-sans text-mainColor-paid ' onClick={() => setShowAll(!showAll)}>{showAll ? 'See Less' : 'See All'}</button>
        </div>
        <div className=' overflow-x-auto'>
        <table className='w-full '>
                <thead className='border-b-[0.8px] border-[#EDF2F6] '>
                  <tr className=''>
                    <th scope="col"  className='text-base font-plus-jakarta-sans font-medium text-color60 text-start whitespace-nowrap pb-5'>Name</th>
                    <th scope="col"  className='text-base font-plus-jakarta-sans font-medium text-color60 text-start whitespace-nowrap pb-5 '>Date</th>
                    <th scope="col"  className='text-base font-plus-jakarta-sans font-medium text-color60 text-start whitespace-nowrap pb-5'>Amount</th>
                    <th scope="col"  className='text-base font-plus-jakarta-sans font-medium text-color60 text-start whitespace-nowrap pb-5 '>Status</th>
                    <th scope="col"  className='text-base font-plus-jakarta-sans font-medium text-color60 text-start whitespace-nowrap pb-5 '>Invoice</th>
                   
                  </tr>
                </thead>
                <tbody className=''>
                    {TableData.slice(0,4).map((data, index)=>(
                        <tr key={index} className='border-b-[0.8px] border-[#EDF2F6] hover:bg-[#F7F8FA] dark:hover:bg-[#3d3d3d]  py-4'>
                            <td className='flex items-center gap-3.5 mt-4 pb-5'>
                                <Image src={data.image} alt="avatar" className='w-[32px] h-[32px] rounded-full' loading='lazy' />
                                <h2 className='text-base whitespace-nowrap font-plus-jakarta-sans font-medium text-[#3A3F51] dark:text-slate-100   pr-12'>{data.name}</h2>
                            </td>
                            <td className='text-base whitespace-nowrap font-plus-jakarta-sans font-normal text-neutral dark:text-[#aaa] pr-8'>{data.date}</td>
                            <td className='text-base whitespace-nowrap font-plus-jakarta-sans font-medium text-mainColor-secondary dark:text-slate-100 pr-8'>{data.amount}</td>
                            <td className={`text-base font-normal font-plus-jakarta-sans pr-8 ${data.status === "Paid" ? "text-mainColor-paid" : " text-mainColor-refund"}`}>{data.status}</td>
                            <td className='text-sm font-plus-jakarta-sans font-normal text-mainColor-secondary dark:text-[#34CAA5]'> <button className='flex justify-center items-center gap-1 ' onClick={() => showModal(data)}> <DownloadIcon/> View</button></td>
                        </tr>
                    ))}
                    {
                        showAll && TableData.slice(4,8).map((data, index)=>(
                          <tr key={index} className='border-b-[0.8px] border-[#EDF2F6] hover:bg-[#F7F8FA] dark:hover:bg-[#3d3d3d]  py-4'>
                          <td className='flex items-center gap-3.5 mt-4 pb-5'>
                              <Image src={data.image} alt="avatar" className='w-[32px] h-[32px] rounded-full' loading='lazy' />
                              <h2 className='text-base whitespace-nowrap font-plus-jakarta-sans font-medium text-[#3A3F51] dark:text-slate-100   pr-12'>{data.name}</h2>
                          </td>
                          <td className='text-base whitespace-nowrap font-plus-jakarta-sans font-normal text-neutral dark:text-[#aaa] pr-8'>{data.date}</td>
                          <td className='text-base whitespace-nowrap font-plus-jakarta-sans font-medium text-mainColor-secondary dark:text-slate-100 pr-8'>{data.amount}</td>
                          <td className={`text-base font-normal font-plus-jakarta-sans pr-8 ${data.status === "Paid" ? "text-mainColor-paid" : " text-mainColor-refund"}`}>{data.status}</td>
                          <td className='text-sm font-plus-jakarta-sans font-normal text-mainColor-secondary dark:text-[#34CAA5]'> <button className='flex justify-center items-center gap-1 ' onClick={() => showModal(data)}> <DownloadIcon/> View</button></td>
                      </tr>

                        ))
                    }
              
                </tbody>
                </table>

        </div>
        {
          downloadModal && <DownloadModal setDownloadModal={setDownloadModal} data={data} />
        }

       
        

    </div>
  )
}

export default Table