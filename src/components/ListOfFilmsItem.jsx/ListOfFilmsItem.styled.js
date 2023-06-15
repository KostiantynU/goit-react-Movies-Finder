import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListOfFilmItem = styled.li`
  margin-bottom: 5px;
  :nth-child(2n + 1) {
    background-color: rgb(245, 251, 252);
  }
`;
export const StyledLinkForItem = styled(Link)`
  font-size: 15px;
`;
