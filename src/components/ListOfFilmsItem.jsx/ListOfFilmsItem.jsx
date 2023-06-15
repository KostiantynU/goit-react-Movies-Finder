import PropTypes from 'prop-types';
import { ListOfFilmItem } from './ListOfFilmsItem.styled';
import { StyledLinkForItem } from './ListOfFilmsItem.styled';

function ListOfFilmsItem({ originalTitle, movieId }) {
  return (
    <ListOfFilmItem>
      <StyledLinkForItem to={`/moviepage/${movieId}`}>{originalTitle}</StyledLinkForItem>
    </ListOfFilmItem>
  );
}

export default ListOfFilmsItem;

ListOfFilmsItem.propTypes = {
  originalTitle: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
};
