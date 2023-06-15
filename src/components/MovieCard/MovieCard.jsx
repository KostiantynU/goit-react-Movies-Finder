import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Watch } from 'react-loader-spinner';
import { IMAGE_PATH } from '../../services/API';
import { getMovie } from '../../services/API';
import {
  MovieWrapper,
  DescriptionWrapper,
  Overview,
  Genres,
  StyledLink,
  ListLinksStyled,
  StyledDiv,
} from './MovieCard.styled';
// import notFoundImg from '../../images/395x574-no-image.jpg';

function MovieCard() {
  const [stateObj, setStateObj] = useState({});
  const [isLoader, setIsLoader] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoader(true);
    getMovie(movieId)
      .then(resultSearchObj => setStateObj({ ...resultSearchObj }))
      .finally(setIsLoader(false));
  }, [movieId]);
  // console.log(stateObj);
  return (
    <>
      {isLoader ? (
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
      ) : (
        <MovieWrapper>
          {stateObj.poster_path ? (
            <img src={`${IMAGE_PATH}${stateObj.poster_path}`} alt="" />
          ) : (
            <Watch
              height="300"
              width="300"
              radius="48"
              color="rgb(73, 203, 230)"
              ariaLabel="watch-loading"
              wrapperStyle={{ justifyContent: 'center' }}
              wrapperClassName=""
              visible={true}
            />
          )}
          <DescriptionWrapper>
            <h2>{stateObj.original_title}</h2>
            <p>User Score: {Math.ceil(stateObj.vote_average * 10) + '%'}</p>
            <Overview>Overview</Overview>
            <p>{stateObj.overview}</p>
            <Genres>Genres</Genres>
            <p>{stateObj.genres?.map(el => `${el.name}${' '} `)}</p>
          </DescriptionWrapper>
        </MovieWrapper>
      )}
      <StyledDiv>
        Additional information
        <ListLinksStyled>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ListLinksStyled>
      </StyledDiv>
      <Outlet />
    </>
  );
}

export default MovieCard;
