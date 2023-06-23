import { Routes, Route, useLocation } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
// import { useTransition, animated } from 'react-spring';

const MainPage = lazy(() => import('pages/MainPage'));
const MoviesSearch = lazy(() => import('pages/MovieSearch/MoviesSearch'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="moviedetails/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
