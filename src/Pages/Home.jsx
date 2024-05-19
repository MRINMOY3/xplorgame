import React, { useEffect, useState } from 'react';
import GenreList from '../Components/GenreList';
import GlobalApi from '../Services/GlobalApi';
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesByGenreId from '../Components/GamesByGenreId';
import Header from '../Components/Header';

function Home() {
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [allGameList, setAllGameList] = useState([]);
  const [genreId, setGenreId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getAllGamesList = () => {
      GlobalApi.getAllGames.then((resp) => {
        setAllGameList(resp.data.results);
      });
    };

    getAllGamesList();
  }, []);

  useEffect(() => {
    if (genreId) {
      getGameListByGenreId(genreId);
    }
  }, [genreId]);

  const getGameListByGenreId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenre(resp.data.results);
      setSearchResults([]); // Clear search results when genre is selected
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state
    GlobalApi.searchGames(query).then((resp) => {
      setSearchResults(resp.data.results);
      setSelectedGenreName(`Search Results for "${query}"`); // Set the selected genre name based on search query
      setGenreId(null); // Clear genre selection
    });
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className='grid grid-cols-4 p-2'>
        <div className='col-span-4 md:col-span-2'>
          {allGameList.length > 0 ? (
            <div>
              <Banner gameBanner={allGameList[0]} />
              <TrendingGames gameList={allGameList} />
              {searchResults.length > 0 ? (
                <GamesByGenreId gameList={searchResults} selectedGenreName={selectedGenreName} />
              ) : (
                <GamesByGenreId gameList={gameListByGenre} selectedGenreName={selectedGenreName} />
              )}
            </div>
          ) : (
            <h3>Loading Image...</h3>
          )}
        </div>
        <div className='col-span-4 md:col-span-2'>
          <GenreList setGenresId={setGenreId} selectedGenreName={setSelectedGenreName} />
        </div>
      </div>
    </div>
  );
}

export default Home;
