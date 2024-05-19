import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`position-fixed ${theme} ${theme === 'dark' ? 'bg-black' : 'bg-white'} min-h-[100vh] max-w-full min-w-fit property`}>
        <div className='position-absolute mx-3 flex flex-col md:flex-row items-center justify-between p-4'>
          <h2 className="hero-heading text-center md:text-left text-gray-800 dark:text-gray-200 mt-4 md:mt-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Gamers Spot
            </span>
            <span className="block text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-400">
              Explore world wide Games Here...
            </span>
          </h2> 

          <div className='rounded-md bg-sky-500 p-1 font-semibold text-xs sm:text-sm'>
            <h6 className='text-black'>Unlock Orientation | Use landscape mode for better Experience</h6>
          </div>

          <h1 className="rnbw text-white font-bold bg-white dark:bg-gray-700 rounded-md p-4 text-base cursor-pointer mx-6 shadow-sm sm:text-lg sm:p-5 md:text-xl md:p-6 lg:text-2xl lg:p-7">
            Version: Gamma 1.0
          </h1>
        </div>
        <Home />
        <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
          Designed and developed by Mrinmoy Bordoloi
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
