import PropTypes from 'prop-types';
import { ReviewItemStyled, AuthorTitle, OverviewStyled } from './ReviewItem.styled';

function ReviewItem({ author, content }) {
  return (
    <>
      <ReviewItemStyled>
        <AuthorTitle>{author}</AuthorTitle>
        <OverviewStyled>{content}</OverviewStyled>
      </ReviewItemStyled>
    </>
  );
}

export default ReviewItem;

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
