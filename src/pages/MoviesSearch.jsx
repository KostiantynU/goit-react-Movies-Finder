import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import ListOfFilms from 'components/ListOfFilms/ListOfFilms';
import { searchMovies } from 'services/API';
import { MainTitle } from './MoviesSearch.styled';

function MoviesSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchArr, setSearchArr] = useState([]);

  const filterText = searchParams.get('query') ?? '';
  // useEffect(() => {
  //   searchMovies(searchParams.get(filterText)).then(response =>
  //     setSearchArr([...response.results])
  //   );
  // }, []);

  const handleSubmit = evt => {
    evt.preventDefault();
    searchMovies(searchParams.get('query')).then(response => setSearchArr([...response.results]));
    evt.target.reset();
  };
  const filteredArr = searchArr.filter(el =>
    el.original_title.toLowerCase().includes(filterText.trim().toLowerCase())
  );
  console.log(searchArr);
  console.log(filteredArr);
  return (
    <div>
      <MainTitle>Movie search</MainTitle>
      <Searchbar
        setSearchArr={setSearchArr}
        setSearchParams={setSearchParams}
        handleSubmit={handleSubmit}
      />
      <ListOfFilms arrayFilms={filteredArr} />
    </div>
  );
}
export default MoviesSearch;
