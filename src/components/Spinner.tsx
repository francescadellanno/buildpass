import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../constants";

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
  margin: 4rem 0;

  background-color: ${colors.white};
  border: 2px solid ${colors.primary};
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  color: ${colors.dark};
  padding: 30px 60px 30px 30px;
  font-size: 1rem;
`;

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

const Text = styled.div`
  font-size: 1.5rem;
  color: ${colors.dark};
  padding-left: 30px;
`;

const Spinner = () => (
  <SpinnerWrapper>
    <SpinnerContainer>
      <Ball delay="0s" />
      <Ball delay="0.2s" />
      <Ball delay="0.4s" />
    </SpinnerContainer>
    <Text>Uploading...</Text>
  </SpinnerWrapper>
);

export default Spinner;
