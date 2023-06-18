import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { HandySvg } from 'handy-svg';
import { Container, StyledNavLink, NavContainer } from './SharedLayout.styled';
import { LoadingNotFoundStyled, TiteLoadingNotFound } from 'pages/NotFound/LoadingNotFound.Styled';
import iconSrc from '../../images/tmdb-icon.svg';

function SharedLayout() {
  return (
    <Container>
      <header>
        <NavContainer>
          <p>Powered by</p>
          <Link to="/">
            <HandySvg src={iconSrc} width="160" height="30" />
          </Link>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </NavContainer>
      </header>
      <main>
        <Suspense
          fallback={
            <LoadingNotFoundStyled>
              <TiteLoadingNotFound>Loading...</TiteLoadingNotFound>
            </LoadingNotFoundStyled>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}

export default SharedLayout;
