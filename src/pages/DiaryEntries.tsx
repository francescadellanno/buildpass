import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../constants";
import DiaryEntryCard from "../components/DiaryEntryCard";
import DiaryLayout from "../components/DiaryLayout";
import Header from "../components/Header";
import useSupabaseData from "../hooks/useSupabaseData";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import StatusUpdateCard from "../components/StatusUpdateCard";

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

const EntryList = styled.section`
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

  return (
    <>
      <BackgroundGlobalStyle />
      <Header />
      <DiaryLayout>
        <HeadingText>Your Diary Entries</HeadingText>
        {loading && <Spinner text="Loading diary entries..." />}
        {!loading && !error && data.length > 0 && (
          <EntryList>
            {data.map((entry) => (
              <EntryLink key={entry.id} to={`/diary-entries/${entry.id}`}>
                <DiaryEntryCard compressed entry={entry} />
              </EntryLink>
            ))}
          </EntryList>
        )}
        {!loading && !error && data.length === 0 && (
          <>
            <StatusUpdateCard message="No diary entries yet, why not add one?" />
          </>
        )}
        {/* TODO: Could generalise the status update component */}
        {error && (
          <Card>Error loading diary entries, please try again later. </Card>
        )}
      </DiaryLayout>
    </>
  );
};

export default DiaryEntries;
