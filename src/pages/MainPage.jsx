import { useState, useEffect } from 'react';
import ListOfFilms from 'components/ListOfFilms/ListOfFilms';
import { getMovies } from 'services/API';
import { motion } from 'framer-motion';

function MainPage() {
  const [arrayFilms, setArrayFilms] = useState([]);
  useEffect(() => {
    getMovies().then(responseObj => {
      setArrayFilms([...responseObj.results]);
    });
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1 style={{ marginBottom: '15px' }}>Trending today</h1>
      <ListOfFilms arrayFilms={arrayFilms} />
    </motion.div>
  );
}

export default MainPage;
