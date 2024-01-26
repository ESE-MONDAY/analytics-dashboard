'use client'
import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

const  ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


 return (
   <div className='flex flex-col gap-4 '>
    <button className='flex flex-col gap-4 p-2 bg-white dark:bg-[#282828]  rounded-full transition-colors duration-300'  onClick={toggleTheme}>
        <span className={`flex items-center justify-center p-2 rounded-full transition-colors duration-100 ${theme === "light" && "bg-[#34CAA5]"}`}>
        <FiSun size={24} className={`${theme === "dark" ? "text-[#B2ABAB]" : "text-white"}`} />
        </span>
        <span className={`flex items-center justify-center p-2 rounded-full transition-colors duration-100 ${theme === "dark" && "bg-[#34CAA5]" }  `}>
        <FiMoon size={24} className={`${theme === "light" ? "text-[#B2ABAB]" : "text-white"}`}  />
        </span>
        
    </button>


   </div> 
 )
}

export default ThemeSwitch