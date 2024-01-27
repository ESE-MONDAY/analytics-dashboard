import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

const NotificationMenu = ({setShowNotificationMenu}:any) => {
  return (
    <div className='fixed top-10 md:top-20 md:right-40 bg-white z-40 dark:bg-[#212121] px-4 py-2 w-80 rounded-md'>
                 <div className='flex gap-8 items-center justify-between border-b-[1px] border-b-[#E5EAEF] dark:border-b-[#818181] py-2'>
                    <h3 className='text-mainColor-secondary dark:text-slate-100 '>Notifications</h3>
                    <button onClick={() => setShowNotificationMenu(false)}>
                    <IoCloseOutline size={18} />
                    </button>
                  </div>
                  <div className='py-8'>
                    <p>No notification at the moment</p>

                  </div>
              </div>
  )
}

export default NotificationMenu