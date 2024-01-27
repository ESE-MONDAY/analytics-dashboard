import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import Link from 'next/link';

const ProfilePop = ({setShowProfilePopUp}:any) => {
  return (
    <div className='fixed top-8 md:top-20 md:right-10 bg-white z-40 dark:bg-[#212121] px-4 py-2 w-80 rounded-md'>
                 <div className='flex gap-8 items-center justify-between border-b-[1px] border-b-[#E5EAEF] dark:border-b-[#818181] py-2'>
                    <h3 className='text-mainColor-secondary dark:text-slate-100 '>Profile</h3>
                    <button onClick={() => setShowProfilePopUp(false)}>
                    <IoCloseOutline size={18} />
                    </button>
                  </div>
                  <div className='flex flex-col  mt-4' >
     {/* Icon 1 */}
<Link href="/" className="flex p-2.5 items-center gap-8 ">
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 12H14.5" stroke="#B2ABAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 15L15.5 12L12.5 9" stroke="#B2ABAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke="#B2ABAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className='text-mainColor-secondary dark:text-slate-100 '>Help</span>
  </Link>
  {/* Icon 2 */}
  <Link href="/" className="flex items-center gap-8 p-2.5">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76" stroke="#B2ABAB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.87988 20.5799L7.96988 21.2099C8.75988 21.6799 9.77988 21.3999 10.2499 20.6099L10.3599 20.4199C11.2599 18.8499 12.7399 18.8499 13.6499 20.4199L13.7599 20.6099C14.2299 21.3999 15.2499 21.6799 16.0399 21.2099L17.7699 20.2199C18.6799 19.6999 18.9899 18.5299 18.4699 17.6299C17.5599 16.0599 18.2999 14.7799 20.1099 14.7799C21.1499 14.7799 22.0099 13.9299 22.0099 12.8799V11.1199C22.0099 10.0799 21.1599 9.21995 20.1099 9.21995C19.0999 9.21995 18.4199 8.81995 18.1799 8.18995C17.9899 7.69995 18.0699 7.05995 18.4699 6.36995C18.9899 5.45995 18.6799 4.29995 17.7699 3.77995L16.9599 3.31995" stroke="#B2ABAB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.64 3.58006C12.74 5.15006 11.26 5.15006 10.35 3.58006L10.24 3.39006C9.78 2.60006 8.76 2.32006 7.97 2.79006L6.24 3.78006C5.33 4.30006 5.02 5.47006 5.54 6.38006C6.45 7.94006 5.71 9.22006 3.9 9.22006C2.86 9.22006 2 10.0701 2 11.1201V12.8801C2 13.9201 2.85 14.7801 3.9 14.7801C5.71 14.7801 6.45 16.0601 5.54 17.6301" stroke="#B2ABAB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className='text-mainColor-secondary dark:text-slate-100 '>Settings</span>
  </Link>
    {/* Icon 3 */}
    <Link href="/" className="flex items-center gap-8 p-2.5">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.56 14.5599L4 11.9999L6.56 9.43994" stroke="#B2ABAB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.23982 12H4.06982" stroke="#B2ABAB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.2398 12H12.2798" stroke="#B2ABAB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20" stroke="#B2ABAB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4C13.05 4 14.05 4.17 14.97 4.49" stroke="#B2ABAB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className='text-mainColor-secondary dark:text-slate-100 '>Switch Accounts</span>
  </Link>


    </div>
              </div>
  )
}

export default ProfilePop