import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const KEY = "2d536748299a0654176fee96f4763797";

const fetchPopularMovie = () => {
  return axios.get(`${baseURL}/trending/movie/day?api_key=${KEY}&language=en-US`).then(({ data }) => data.results);
};

const fetchMovieDetails = (showId) => {
  return axios.get(`${baseURL}/movie/${showId}?api_key=${KEY}&language=en-US`).then(({ data }) => data);
};

const fetchMovieWithQuery = (searchQuery) => {
  return axios
    .get(`${baseURL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
    .then(({ data }) => data.results);
  // .then(entries => entries.map(entry => entry.show));
};

const fetchActorsDetails = (showId) => {
  return axios.get(`${baseURL}/movie/${showId}/credits?api_key=${KEY}&language=en-US`).then(({ data }) => data.cast);
};

const fetchReviewsDetails = (showId) => {
  return axios
    .get(`${baseURL}/movie/${showId}/reviews?api_key=${KEY}&language=en-US&page=1`)
    .then(({ data }) => data.results);
};

const movieApp = { fetchPopularMovie, fetchMovieDetails, fetchMovieWithQuery, fetchActorsDetails, fetchReviewsDetails }

export default movieApp;
