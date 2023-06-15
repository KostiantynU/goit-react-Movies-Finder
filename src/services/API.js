const API_KEI = 'api_key=01e602e077bffb2dd10fabcf093ebced';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TREND_DAY = 'trending/movie/day';
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

export async function getMovies() {
  return await fetch(`${BASE_URL}${TREND_DAY}?${API_KEI}`)
    .then(response => response.json())
    .catch(err => console.log(err));
}
export async function getMovie(movieId) {
  return await fetch(`${BASE_URL}movie/${movieId}?${API_KEI}&language=en-US`)
    .then(response => response.json())
    .catch(err => console.error(err));
}
export async function getCredits(movieId) {
  return await fetch(`${BASE_URL}movie/${movieId}/credits?${API_KEI}&language=en-US`)
    .then(response => response.json())
    .catch(err => console.error(err));
}
export async function getReview(movieId) {
  return await fetch(`${BASE_URL}movie/${movieId}/reviews?${API_KEI}&language=en-US&page=1`)
    .then(response => response.json())
    .catch(err => console.error(err));
}
export async function searchMovies(query) {
  return await fetch(`${BASE_URL}search/movie?${API_KEI}&query=${query}`)
    .then(response => response.json())
    .catch(err => console.error(err));
}
