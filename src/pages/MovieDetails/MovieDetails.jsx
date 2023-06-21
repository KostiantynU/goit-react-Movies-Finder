import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { WatchBig, WatchSmall } from 'components/MySpinners/WatchBigAndSmall';
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
import { LoadingNotFoundStyled, TiteLoadingNotFound } from 'pages/NotFound/LoadingNotFound.Styled';

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

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <>
      {isLoader ? (
        <WatchSmall />
      ) : (
        <>
          <StyledGoBackBtn to={backLinkHref.current}>Go back</StyledGoBackBtn>
          <MovieWrapper>
            {stateObj.poster_path ? (
              <img src={`${IMAGE_PATH}${stateObj.poster_path}`} alt="" />
            ) : (
              <WatchBig />
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
        </>
      )}
      {/* <DivRotateInDownLeft> */}
      <div style={{ width: '100%', height: '300px' }}>
        <Suspense
          fallback={
            <LoadingNotFoundStyled>
              <TiteLoadingNotFound>Loading...</TiteLoadingNotFound>
            </LoadingNotFoundStyled>
          }
        >
          <Outlet />
        </Suspense>
      </div>
      {/* </DivRotateInDownLeft> */}
    </>
  );
}

export default MovieCard;
