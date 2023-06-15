import PropTypes from 'prop-types';
import { CastListItemStyled } from './CastListItemStyled';
import { IMAGE_PATH } from '../../services/API';
import notFoundImg from '../../images/395x574-no-image.jpg';

function CastListItem({ character, characterName, charachterPhoto }) {
  return (
    <CastListItemStyled>
      <img
        src={charachterPhoto ? `${IMAGE_PATH}${charachterPhoto}` : `${notFoundImg}`}
        alt={characterName}
      />
      <p>{characterName}</p>
      <p>{character}</p>
    </CastListItemStyled>
  );
}

export default CastListItem;

CastListItem.propTypes = {
  character: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  charachterPhoto: PropTypes.string,
};
