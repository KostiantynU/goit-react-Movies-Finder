import PropTypes from 'prop-types';
import { ListOfFilmItem } from './ListOfFilmsItem.styled';
import { StyledLinkForItem } from './ListOfFilmsItem.styled';
import { useLocation } from 'react-router-dom';

function ListOfFilmsItem({ originalTitle, movieId }) {
  const location = useLocation();
  return (
    <ListOfFilmItem>
      <StyledLinkForItem to={`/moviedetails/${movieId}`} state={{ from: location }}>
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
