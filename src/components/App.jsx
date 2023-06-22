import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
// import { useTransition, animated } from 'react-spring';

const MainPage = lazy(() => import('pages/MainPage'));
const MoviesSearch = lazy(() => import('pages/MovieSearch/MoviesSearch'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  // const location = useLocation();
  // console.log(location.pathname);
  // const transitions = useTransition(location, location => location.key, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });
  // {
  //   transitions.map(({ item, props, key }) => {
  //     <animated.div key={key} style={props}>
  //       <Route path="cast" element={<Cast />} location={item} />
  //       <Route path="reviews" element={<Reviews />} />;
  //     </animated.div>;
  //   });
  // }
  //
  //
  return (
    <Routes>
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
  );
};

// function DynamicContent() {
//   const location = useLocation();
//   const [displayLocation, setDisplayLocation] = useState(location);
//   const [transitionStage, setTransitionStage] = useState('slideInLeft');

//   useEffect(() => {
//     if (location !== displayLocation) setTransitionStage('slideInRight');
//   }, [displayLocation, location]);

//   return (
//     <div
//       className={`${transitionStage}`}
//       onAnimationEnd={() => {
//         if (transitionStage === 'slideInRigt') {
//           setTransitionStage('slideInLeft');
//           setDisplayLocation(location);
//         }
//       }}
//     >
//       <Routes location={displayLocation}>
//         <Route path="cast" element={<Cast />} />
//         <Route path="reviews" element={<Reviews />} />
//       </Routes>
//     </div>
//   );
// }
