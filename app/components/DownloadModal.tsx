import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

const DownloadModal = ({setDownloadModal, data}: any) => {
  return (
    <div className='fixed top-0 left-0 z-40 bg-black/50 flex justify-center items-center h-screen w-screen px-4' onClick={() => setDownloadModal(false)}>
        <div className='bg-white px-4  py-2 rounded-md'>
        <div className='flex gap-8 items-center justify-between border-b-[1px]  border-b-[#E5EAEF] dark:border-b-[#818181] py-2 '>
                    <h3 className='text-mainColor-secondary  '>Download Reciept</h3>
                    <button onClick={() => setDownloadModal(false)}>
                    <IoCloseOutline size={24} />
                    </button>
        </div>
        <div className='flex flex-col gap-2 mt-4 '>
            <p className='text-sm sm:text-base whitespace-nowrap text-mainColor-secondary font-plus-jakarta-sans font-normal'>Purchase Date: {data.date}</p>
            <p className='text-mainColor-secondary text-sm sm:text-base whitespace-nowrap font-plus-jakarta-sans font-normal'>Amount Due: {data.amount}</p>
            <p className='text-mainColor-secondary text-sm sm:text-basewhitespace-nowrap font-plus-jakarta-sans font-normal'>Payment Status: {data.status}</p>
        </div>
        </div>
        
    </div>
  )
}

export default DownloadModal