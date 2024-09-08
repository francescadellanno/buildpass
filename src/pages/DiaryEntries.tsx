import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { colors, siteDiary } from "../constants";
import DiaryEntryCard from "../components/DiaryEntryCard";
import DiaryLayout from "../components/DiaryLayout";
import Header from "../components/Header";
import useSupabaseData from "../hooks/useSupabaseData";

const HeadingText = styled.h1`
  color: ${colors.dark};
  margin: 0 0 20px 0;
`;

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
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const DiaryEntries: React.FC = () => {
  const { data, loading, error } = useSupabaseData();
  // I considered putting a loading spinner here while the data was loading but the network request is so fast that it's really not necessary

  return (
    <>
      <BackgroundGlobalStyle />
      <Header />
      <DiaryLayout>
        <HeadingText>Your Reports</HeadingText>
        <EntryList>
          {data.map((entry) => (
            <EntryLink key={entry.id} to={`/diary-entry/${entry.id}`}>
              <DiaryEntryCard compressed entry={entry} />
            </EntryLink>
          ))}
        </EntryList>
      </DiaryLayout>
    </>
  );
};

export default DiaryEntries;
