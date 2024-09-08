import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BackgroundGlobalStyle, colors } from "../constants";
import Header from "../components/Header";

const HomeWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  margin-top: 100px;
`;

const HeadingText = styled.h1`
  color: ${colors.dark};
  font-size: 4rem;
  text-align: center;
  margin: 0;
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
      <Header />
      <HomeWrapper>
        <HeadingText>
          Your Construction <br /> Site Diary
        </HeadingText>
        <div>
          <GetStartedLink to="/diary-entries">GET STARTED</GetStartedLink>
        </div>
      </HomeWrapper>
    </>
  );
};

export default Home;
