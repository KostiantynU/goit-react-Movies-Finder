import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);
  -webkit-box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);
  -moz-box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Overview = styled.p`
  font-size: 30px;
  font-weight: 700;
`;
export const Genres = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
export const StyledLink = styled(Link)`
  display: inline-block;
  margin-bottom: 15px;
`;
export const StyledDiv = styled.div`
  box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);
  -webkit-box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);
  -moz-box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);
`;
export const ListLinksStyled = styled.ul`
  margin-bottom: 15px;
  margin-left: 20px;
`;
