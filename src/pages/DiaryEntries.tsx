import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { colors, siteDiary } from "../constants";
import DiaryEntryCard from "../components/DiaryEntryCard";
import DiaryLayout from "../components/DiaryLayout";
import Header from "../components/Header";

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

const EntryList = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const EntryLink = styled(Link)`
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const DiaryEntries: React.FC = () => {
  return (
    <>
      <Header />
      <DiaryLayout>
        <BackgroundGlobalStyle />
        <EntryList>
          {siteDiary.map((entry) => (
            <EntryLink key={entry.id} to={`/diary-entry/entry/${entry.id}`}>
              <DiaryEntryCard {...entry} />
            </EntryLink>
          ))}
        </EntryList>
      </DiaryLayout>
    </>
  );
};

export default DiaryEntries;
