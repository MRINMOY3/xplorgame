import React from 'react';

function Banner({ gameBanner }) {
  return (
    <div className="relative">
      <img
        src={gameBanner.background_image}
        alt="Game Banner"
        className="w-full h-auto object-cover rounded-xl max-w-screen-lg"
      />
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center rounded-xl">
          <h2 className='text-white dark:text-fuchsia-600'>{gameBanner.name}</h2>

        </div>
      </div>
    </div>
  );
}

export default Banner;
