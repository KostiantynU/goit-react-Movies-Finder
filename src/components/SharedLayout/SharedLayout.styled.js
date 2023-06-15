import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 90vw;

  margin-left: auto;
  margin-right: auto;
`;
export const StyledNavLink = styled(NavLink)`
  color: black;
  padding: 10px 15px;
  border-radius: 4px;
  &.active {
    background-color: rgb(73, 203, 230);
    color: white;
  }
`;
export const NavContainer = styled.nav`
  position: relative;
  padding: 15px 5px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);
  -webkit-box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);
  -moz-box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);
`;
