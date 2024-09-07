import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../constants";

// TODO: Modify to be mobile first
//TODO: Change colours to use hash
//TODO: Create constants for mobile / small screen sizes
//TODO: Add semantic headings etc h1, h2, h3 etc
//TODO: Maybe use REM instead of PX
const BackgroundGlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    background-color: ${colors.dark};
  }

  #root {
    height: 100%;
  }
`;

const HomeWrapper = styled.div`
  align-items: center;
  color: ${colors.lightest};
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: center;
`;

const HeadingText = styled.div`
  font-size: 4rem;
  text-align: center;
`;

const GetStartedLink = styled(Link)`
  display: inline-block;
  background-color: ${colors.primary};
  border: none;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
  padding: 12px 24px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${colors.secondary};
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <BackgroundGlobalStyle />
      <HomeWrapper>
        <HeadingText>Construction</HeadingText>
        <HeadingText>Your Site Diary</HeadingText>
        <div>
          <GetStartedLink to="/diary-entries">GET STARTED</GetStartedLink>
        </div>
      </HomeWrapper>
    </>
  );
};

export default Home;
