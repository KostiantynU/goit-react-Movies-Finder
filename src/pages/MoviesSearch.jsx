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

  useEffect(() => {
    if (filterText) {
      searchMovies(filterText).then(response => setSearchArr([...response.results]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    searchMovies(filterText).then(response => setSearchArr([...response.results]));
    evt.target.reset();
    // updateQueryString('');
  };

  // const filteredArr = searchArr.filter(el =>
  //   el.original_title.toLowerCase().includes(filterText.trim().toLowerCase())
  // );
  // console.log(filteredArr);
  // console.log(searchArr);
  return (
    <div>
      <MainTitle>Movie search</MainTitle>
      <Searchbar handleSubmit={handleSubmit} onChange={updateQueryString} value={filterText} />
      <ListOfFilms arrayFilms={searchArr} />
    </div>
  );
}
export default MoviesSearch;
