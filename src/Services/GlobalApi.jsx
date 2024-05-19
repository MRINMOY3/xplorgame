import axios from 'axios';

const key = "a677d5de4e5844dba22147ca51ebda46";

const axiosCreate = axios.create({
  baseURL: 'https://api.rawg.io/api'
});

const getGenreList = axiosCreate.get(`/genres?key=${key}`);
const getAllGames = axiosCreate.get(`/games?key=${key}`);

const getGameListByGenreId = (id) => axiosCreate.get(`/games?key=${key}&genres=${id}`);
const searchGames = (query) => axiosCreate.get(`/games?key=${key}&search=${query}`);

const GlobalApi = {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
  searchGames
};

export default GlobalApi;
