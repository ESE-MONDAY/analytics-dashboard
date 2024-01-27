'use client'
import React, {useState} from 'react'
import SearchBar from './Search'
import profile from '../../public/images/profile.png'
import Image from "next/image";
import Link from 'next/link';
import Logo from "@/public/images/logo.png";
import { useTheme } from 'next-themes';
import { IoCloseOutline } from "react-icons/io5";
import ProfileMenu from './ProfileMenu';
import ThemeSwap from './ThemeSwap';
import BellIcon from './BellIcon';
import CalendarIcon from './CalendarIcon';
import NotificationMenu from './NotificationMenu';
import ProfilePop from './ProfilePop';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);
  const [showProfilePopUp, setShowProfilePopUp] = useState(false);
  

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <header className="py-2.5 flex justify-between w-full border-b-[1px] border-b-[#E5EAEF] dark:border-b-[#818181]">
    <div className=" px-5 flex w-full justify-between  ">
      <div className="w-full flex items-center ">
        <div className="flex items-center justify-center  ">
        <h1 className="font-plus-jakarta-sans hidden sm:flex text-xl font-semibold text-[#26282C] dark:text-white">MegaMind</h1>   
        <Image src={Logo} alt="Megamind Logo" width={100} height={100} className="h-8 w-8 flex sm:hidden" />
        </div>
      </div>
      <div className='w-full '>
      <SearchBar />

      </div>
      
      <div className="hidden w-full sm:flex gap-5 items-center justify-end   ">
        <div className="py-2  px-4 flex gap-2.5 ">
          <CalendarIcon theme={theme} />
          <p className="font-plus-jakarta-sans text-sm font-normal text-[#26282C] dark:text-[#aaa] whitespace-nowrap flex items-center">November 15, 2023</p>
        </div>
        <div className="py-2 gap-1.5 px-2 flex ">
          <button className="p-3 flex justify-center items-center rounded-full border-[1px] border-[#DADDDD]" onClick={() => setShowNotificationMenu(!showNotificationMenu)}>
            <BellIcon theme={theme} />
          </button>
          {
            showNotificationMenu &&(
              <NotificationMenu setShowNotificationMenu={setShowNotificationMenu} />
            )
          }
          <button onClick={() => setShowProfilePopUp(!showProfilePopUp)} className="border-[1px] border-[#DADDDD] rounded-full flex gap-3 items-center  justify-between py-0.5  px-4 ">
            <Image src={profile} alt="profile photo" className="h-6 w-6" />
            <div>
              <p className='text-xs font-medium'>Justin Bergson</p>
              <p className='text-xs font-light'>Justin@gmail.com</p>
            </div>
            <div className=''>
            {theme === "dark" ? (<>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#FCFCFE"/>
                  </svg>
              </>): (
                <>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#0D062D"/>
                </svg>
                </>

              )}
            </div>
            <div>
             
          
            </div>

          </button>
          {
            showProfilePopUp &&(
              <ProfilePop setShowProfilePopUp={setShowProfilePopUp} />
            )
          }
          
        </div>

      
      </div>
      <div className='sm:hidden w-full justify-end flex gap-5 items-center '>
      <button className="p-3 flex justify-center items-center rounded-full border-[1px] border-[#DADDDD]" onClick={() => setShowNotificationMenu(!showNotificationMenu)}>
            <BellIcon theme={theme} />
          </button>
          {
            showNotificationMenu &&(
              <NotificationMenu setShowNotificationMenu={setShowNotificationMenu} />
            )
          }
            
         <button onClick={() => setShowProfileMenu(true)} >
            <Image src={profile} alt="profile photo" className="h-10 w-10" />
          </button>
      </div>
      {
        showProfileMenu && (
          <ProfileMenu setShowProfileMenu={setShowProfileMenu} theme={theme} toggleTheme={toggleTheme} />
        )
      }
      
    </div>

   </header>
  )
}

export default Header