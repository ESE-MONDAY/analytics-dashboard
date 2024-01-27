'use client'
import React, { useState, ChangeEvent } from 'react';


const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');




  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // onSearch(searchQuery);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };





  return (
    <div className="hidden lg:flex py-1.5 items-center border-[1px] border-[#A3A3A3] w-[60%] h-auto lg:w-[349px] rounded-full px-2">
      <div className="text-gray-500 mx-2" >
      <svg width="1w" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A"/>
          </svg>
      </div>
    
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow   focus:outline-none bg-transparent font-normal text-sm"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
