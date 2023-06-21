import styled, { keyframes } from 'styled-components';
import { slideInLeft, slideInRight } from 'react-animations';
import { animated, useTransition } from 'react-spring';

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

export function TestAnimation(data) {
  const [transitions, api] = useTransition(data, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }));

  return transitions((style, item) => <animated.div style={style}>{item}</animated.div>);
}
