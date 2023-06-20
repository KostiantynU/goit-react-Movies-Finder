import styled, { keyframes } from 'styled-components';
import { rotateInDownLeft, rotateInDownRight } from 'react-animations';

const rotateInDownLeftAnimation = keyframes`${rotateInDownLeft}`;
const DivStyledRotateInDownLeft = styled.div`
  animation: ease 1s ${rotateInDownLeftAnimation};
`;
export function DivRotateInDownLeft({ children }) {
  return <DivStyledRotateInDownLeft>{children}</DivStyledRotateInDownLeft>;
}

const rotateInDownRightAnimation = keyframes`${rotateInDownRight}`;
const DivStyledRotateInDownRight = styled.div`
  animation: ease 1s ${rotateInDownRightAnimation};
`;
export function DivRotateInDownRight({ children }) {
  return <DivStyledRotateInDownRight>{children}</DivStyledRotateInDownRight>;
}
