import styled, { keyframes } from 'styled-components';
import { slideInLeft, slideInRight } from 'react-animations';

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const DivStyledSlideInLeft = styled.div`
  animation: ease 1s ${slideInLeftAnimation};
`;
export function DivSlideInLeft({ children }) {
  return <DivStyledSlideInLeft>{children}</DivStyledSlideInLeft>;
}

const slideInRightAnimation = keyframes`${slideInRight}`;
const DivStyledSlideInRight = styled.div`
  animation: ease 1s ${slideInRightAnimation};
`;
export function DivSlideInRight({ children }) {
  return <DivStyledSlideInRight>{children}</DivStyledSlideInRight>;
}
