import PropTypes from 'prop-types';
import { ListOfFilm } from './ListOfFilms.styled';
import ListOfFilmsItem from 'components/ListOfFilmsItem.jsx/ListOfFilmsItem';

function ListOfFilms({ arrayFilms }) {
  return (
    <ListOfFilm>
      {arrayFilms?.map(({ id, original_title }) => (
        <ListOfFilmsItem
          key={id}
          originalTitle={original_title}
          movieId={`${id}`}
        ></ListOfFilmsItem>
      ))}
    </ListOfFilm>
  );
}
export default ListOfFilms;

ListOfFilms.propTypes = {
  arrayFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
