import { useState, useEffect } from 'react';
import ListOfFilms from 'components/ListOfFilms/ListOfFilms';
import { getMovies } from 'services/API';

function MainPage() {
  const [arrayFilms, setArrayFilms] = useState([]);
  useEffect(() => {
    getMovies().then(responseObj => {
      setArrayFilms([...responseObj.results]);
    });
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <ListOfFilms arrayFilms={arrayFilms} />
    </>
  );
}

export default MainPage;
