import { Outlet } from 'react-router-dom';
import { Container, StyledNavLink, NavContainer } from './SharedLayout.styled';
import { HandySvg } from 'handy-svg';
import iconSrc from '../../images/tmdb-icon.svg';

function SharedLayout() {
  return (
    <Container>
      <NavContainer>
        <p>Powered by</p>
        <HandySvg src={iconSrc} width="160" height="30" />
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </NavContainer>

      <Outlet />
    </Container>
  );
}

export default SharedLayout;
