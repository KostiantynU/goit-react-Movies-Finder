import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import ListOfFilms from 'components/ListOfFilms/ListOfFilms';
import { searchMovies } from 'services/API';
import { MainTitle } from './MoviesSearch.styled';
import { motion } from 'framer-motion';

function MoviesSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchArr, setSearchArr] = useState([]);
  const [totalResults, setTotalResults] = useState(1);
  const filterText = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!filterText) return;
    searchMovies(filterText).then(response => {
      setTotalResults(response.total_results);
      setSearchArr([...response.results]);
    });
  }, [filterText, totalResults]);

  // const updateQueryString = query => {
  //   const nextParams = query !== '' ? { query } : {};
  //   setSearchParams(nextParams);
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.search.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    evt.target.reset();
    // updateQueryString('');
  };

  // const filteredArr = searchArr.filter(el =>
  //   el.original_title.toLowerCase().includes(filterText.trim().toLowerCase())
  // );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <MainTitle>Movie search</MainTitle>
      <Searchbar handleSubmit={handleSubmit} value={filterText} />
      {totalResults !== 0 ? (
        <ListOfFilms arrayFilms={searchArr} />
      ) : (
        <p style={{ margin: '0.5em' }}>There are no results!</p>
      )}
    </motion.div>
  );
}
export default MoviesSearch;
