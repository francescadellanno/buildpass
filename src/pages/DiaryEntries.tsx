import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { siteDiary } from "../constants";

//TODO: Change all colours to use this
const colors = {
  lightest: "#EEE2DF",
  lighter: "#EED7C5",
  primary: "#C89F9C",
  secondary: "#C97C5D",
  dark: "#B36A5E",
};

const BackgroundGlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    background-color: ${colors.lightest};
  }

  #root {
    height: 100%;
  }
`;

const DiaryEntriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const Heading = styled.div`
  color: ${colors.dark};
  font-weight: bold;
  font-size: 50px;
  margin: 40px;

  @media (max-width: 768px) {
    // font-size: 40px; /* Font size for mobile phones */
    margin: 25px;
  }

  @media (max-width: 480px) {
    font-size: 30px; /* Font size for very small screens */
    margin: 10px;
  }
`;

const EntryLink = styled(Link)`
  text-decoration: none;
  color: ${colors.dark}; /* Color of the link text */
  width: 100%; /* Ensure link fills the width of its container */
  display: flex; /* Use flex to center align content */
  justify-content: center; /* Center content horizontally */
`;

const Entry = styled.div`
  background-color: #fff;
  border: 2px solid ${colors.primary};
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 16px;
  width: 90%;
  max-width: 700px;
  text-align: center;
  color: ${colors.dark};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 700px; /* Fixed width */
  max-width: 100%; /* Ensure it doesn’t exceed container width */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  color: ${colors.dark};
  font-size: 1.5rem;
  margin-bottom: 12px;
`;

const DiaryEntries: React.FC = () => {
  return (
    <>
      <BackgroundGlobalStyle />
      <BackgroundGlobalStyle />
      <DiaryEntriesWrapper>
        <Heading>Site Diary Entries</Heading>
        {siteDiary.map((entry) => (
          <EntryLink
            to={`/diary-entry/${entry.date}/${entry.title
              .toLowerCase()
              .replace(/ /g, "-")}`}
          >
            <Entry key={entry.date + entry.title}>
              <Title>{entry.title}</Title>
              <p>{entry.date}</p>
              <p>{entry.workProgress}</p>
            </Entry>
          </EntryLink>
        ))}
      </DiaryEntriesWrapper>
    </>
  );
};

export default DiaryEntries;
