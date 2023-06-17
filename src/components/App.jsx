import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const MainPage = lazy(() => import('pages/MainPage'));
const MoviesSearch = lazy(() => import('pages/MoviesSearch'));
const NotFound = lazy(() => import('pages/NotFound'));
const MovieCard = lazy(() => import('./MovieCard/MovieCard'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="moviepage/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<MoviesSearch />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
