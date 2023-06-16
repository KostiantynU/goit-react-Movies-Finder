import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
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
  StyledGoBackBtn,
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

  const watchSmall = () => (
    <Watch
      height="200"
      width="200"
      radius="48"
      color="rgb(73, 203, 230)"
      ariaLabel="watch-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName=""
      visible={true}
    />
  );
  const watchBig = () => (
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
  );
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      {isLoader ? (
        watchSmall()
      ) : (
        <>
          <StyledGoBackBtn to={backLinkHref}>Go back</StyledGoBackBtn>
          <MovieWrapper>
            {stateObj.poster_path ? (
              <img src={`${IMAGE_PATH}${stateObj.poster_path}`} alt="" />
            ) : (
              watchBig()
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
        </>
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
