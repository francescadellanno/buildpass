import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../constants";

// Keyframes for bouncing animation
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

// Keyframes for moving balls along a line
const move = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0);
  }
`;

// Styled component for the spinner
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 80px;
  height: 20px;
  position: relative;
`;

const Ball = styled.div<{ delay: string }>`
  width: 15px;
  height: 15px;
  background-color: ${colors.dark};
  border-radius: 50%;
  animation: ${bounce} 1s ease-in-out infinite, ${move} 1s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay};
`;

// Spinner component
const Spinner = () => (
  <SpinnerContainer>
    <Ball delay="0s" />
    <Ball delay="0.2s" />
    <Ball delay="0.4s" />
  </SpinnerContainer>
);

export default Spinner;
