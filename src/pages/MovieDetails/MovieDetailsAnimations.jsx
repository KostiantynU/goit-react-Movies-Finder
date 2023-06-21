import styled, { keyframes } from 'styled-components';
import { slideInLeft, slideInRight } from 'react-animations';
import { useSpring, animated } from 'react-spring';

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

export function TestAnimation() {
  const [spring, api] = useSpring(() => ({
    from: { x: 0 },
  }));
  const handleAnim = () => {
    api.start({
      from: { x: 0 },
      to: { x: 100 },
    });
  };
  return (
    <animated.div
      onClick={handleAnim}
      style={{
        width: '80px',
        height: '80px',
        background: '#ff6d6d',
        borderRadius: '8px',
        border: '1px solid black',
        ...spring,
      }}
    />
  );
}
