import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'services/API';
import { Watch } from 'react-loader-spinner';
import { ReviewStyledList } from './Review.styled';
import ReviewItem from 'components/ReviewItem/ReviewItem';
// import { DivSlideInRight } from 'pages/MovieDetails/MovieDetailsAnimations';
// import { TestAnimation } from 'pages/MovieDetails/MovieDetailsAnimations';
import { motion } from 'framer-motion';

function Reviews() {
  const [review, setReview] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoader(true);
    getReview(movieId)
      .then(response => setReview(response.results))
      .finally(setIsLoader(false));
  }, [movieId]);
  return (
    <>
      {isLoader && (
        <Watch
          height="100"
          width="100"
          radius="48"
          color="rgb(73, 203, 230)"
          ariaLabel="watch-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          wrapperClassName=""
          visible={true}
        />
      )}
      {review.length > 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ReviewStyledList>
            {review?.map(({ id, author, content }) => (
              <ReviewItem key={id} author={author} content={content}></ReviewItem>
            ))}
          </ReviewStyledList>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>We dont have any reviews on this movie</div>
        </motion.div>
      )}
    </>
  );
}

export default Reviews;
