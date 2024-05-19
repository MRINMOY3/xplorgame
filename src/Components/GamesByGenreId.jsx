import React, { useEffect } from 'react';

function GamesByGenreId({ gameList, selectedGenreName }) {
  useEffect(() => {
    console.log("GameList", gameList);
  }, [gameList]);

  return (
    <div>
      <h3 className='font-bold text-[30px] text-blue-400 dark:text-white'>{selectedGenreName} Games</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gameList.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <img src={item.background_image} className="w-full h-32 md:h-48 lg:h-32 rounded-xl object-cover" />
            <div className="w-full mt-4 text-center">
              <h2 className="text-sm font-bold text-gray-900 dark:text-white">{item.name} <span className="text-sm text-gray-500 dark:text-blue-400"><br></br>{`Metacritic ${item.metacritic}`}</span></h2>
              <h2 className="text-sm text-gray-600 dark:text-gray-300">⭐{item.rating} ❤️‍🔥{item.suggestions_count} 👁️‍🗨️{item.reviews_count}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenreId;
