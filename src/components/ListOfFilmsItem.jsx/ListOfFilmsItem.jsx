import PropTypes from 'prop-types';
import { ListOfFilmItem } from './ListOfFilmsItem.styled';
import { StyledLinkForItem } from './ListOfFilmsItem.styled';
import { useLocation } from 'react-router-dom';

function ListOfFilmsItem({ originalTitle, movieId }) {
  const location = useLocation();
  console.log('location in item', location);
  return (
    <ListOfFilmItem>
      <StyledLinkForItem to={`/moviepage/${movieId}`} state={{ from: location }}>
        {originalTitle}
      </StyledLinkForItem>
    </ListOfFilmItem>
  );
}

export default ListOfFilmsItem;

ListOfFilmsItem.propTypes = {
  originalTitle: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
};
