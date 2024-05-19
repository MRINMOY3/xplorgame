import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';

function GenreList({ setGenresId, selectedGenreName }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  useEffect(() => {
    if (genreList.length > 0) {
      // Find the index of the "Action" genre
      const actionGenre = genreList.find(genre => genre.name.toLowerCase() === 'action');
      if (actionGenre) {
        const actionIndex = genreList.indexOf(actionGenre);
        setActiveIndex(actionIndex);
        setGenresId(actionGenre.id);
        selectedGenreName(actionGenre.name);
      } else {
        // Default to the first genre if "Action" is not found
        setActiveIndex(0);
        setGenresId(genreList[0].id);
        selectedGenreName(genreList[0].name);
      }
    }
  }, [genreList]);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className=' mx-3 text-[30px] font-bold text-blue-500 dark:text-pink-400'>Genre</h2>
      {genreList.map((item, index) => (
        <div 
          key={index}
          onClick={() => {
            setActiveIndex(index);
            setGenresId(item.id);
            selectedGenreName(item.name);
          }}
          className={`mx-3 text-black dark:text-white flex gap-2 items-center mb-2 cursor-pointer hover:bg-blue-500 rounded-md hover:dark:bg-pink-500 p-4 group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex === index ? "bg-yellow-300 dark:bg-violet-500" : null}`}
        >
          <img 
            src={item.image_background} 
            alt={`${item.name} background`} 
            className={`w-10 h-10 object-cover rounded-lg ${activeIndex === index ? "scale-125 font-bold" : null}`}
          />
          <h3 className={`text-black-500 group-hover:font-bold group:hover:text-[30px] transition-all ease-out mx-3 duration-300 ${activeIndex === index ? "scale-125" : null}`}>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
