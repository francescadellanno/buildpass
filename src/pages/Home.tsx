import React from "react";
import styled, { createGlobalStyle } from "styled-components";

//TODO: Change colours to use hash
//TODO: Create constants for mobile / small screen sizes

const BackgroundGlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    background-color: #B36A5E;
  }

  #root {
    height: 100%;
  }
`;

const HomeWrapper = styled.div`
  align-items: center;
  color: #eee2df;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: center;
`;

const HeadingText = styled.div`
  font-size: 100px;

  @media (max-width: 768px) {
    font-size: 70px; /* Font size for mobile phones */
  }

  @media (max-width: 480px) {
    font-size: 60px; /* Font size for very small screens */
  }
`;

const GetStartedButton = styled.button`
  background-color: #c89f9c;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 12px 24px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #d7b7b0;
  }

  &:active {
    transform: scale(0.98);
  }
`;

function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <BackgroundGlobalStyle />
      <HomeWrapper>
        <HeadingText>Construction</HeadingText>
        <HeadingText>Your Site Diary</HeadingText>
        <div>
          <GetStartedButton onClick={handleClick}>GET STARTED</GetStartedButton>
        </div>
      </HomeWrapper>
    </>
  );
}

export default Home;
