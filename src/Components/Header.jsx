import React, { useContext, useState } from 'react';
import { HiCircleStack } from 'react-icons/hi2';
import { IoMoonSharp, IoSunny } from 'react-icons/io5';
import logo from './../assets/images/logo.png';
import { ThemeContext } from '../Context/ThemeContext';

function Header({ onSearch }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className={`text-white flex flex-col md:flex-row m-1 bg-violet-500 p-3 rounded-md items-center relative ${theme === 'light' ? 'dark:bg-gray-800' : ''}`}>
      <img src={logo} width={80} height={80} className="rounded-md mb-2 md:mb-0" alt="Logo" />
      <div className="flex bg-black-500 p-2 w-full items-center bg-transparent mx-1 rounded-full">
        <div className='mx-1'>
          {theme === 'light' ? (
            <IoMoonSharp
              className="text-[35px] bg-violet-500 text-black p-1 rounded-full cursor-pointer"
              onClick={() => { setTheme('dark'); localStorage.setItem('theme', 'dark'); }}
            />
          ) : (
            <IoSunny
              className="text-[35px] dark:bg-violet-500 text-slate-200 rounded-full cursor-pointer"
              onClick={() => { setTheme('light'); localStorage.setItem('theme', 'light'); }}
            />
          )}
          <h5 className='text-yellow-400 font-bold'>
            {theme === 'light' ? <span className='text-yellow-300'>Light</span> : <span className='text-white'>Dark</span>}
          </h5>
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="dark:bg-lime-400 text-neutral-50 dark:text-black p-2 rounded-md outline-none flex-grow mx-2"
          placeholder="Search..."
        />

        <button
          onClick={handleSearch}
          className="ml-2 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
        >
          Search
        </button>

        <HiCircleStack className="ml-2 hidden md:block" />
      </div>
    </div>
  );
}

export default Header;
