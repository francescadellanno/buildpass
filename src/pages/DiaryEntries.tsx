import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BackgroundGlobalStyle, colors } from "../constants";
import DiaryEntryCard from "../components/DiaryEntryCard";
import DiaryLayout from "../components/DiaryLayout";
import Header from "../components/Header";
import useGetAllDiaryEntries from "../hooks/useGetAllDiaryEntries";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import UploadStatusCard from "../components/UploadStatusCard";

const HeadingText = styled.h1`
  color: ${colors.dark};
  margin: 0 0 20px 0;
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
  const { diaryEntries, loading, error } = useGetAllDiaryEntries();

  return (
    <>
      <BackgroundGlobalStyle />
      <Header />
      <DiaryLayout>
        <HeadingText>Your Diary Entries</HeadingText>
        {loading && <Spinner text="Loading diary entries..." />}
        {diaryEntries.length > 0 && (
          <EntryList>
            {diaryEntries.map((diaryEntry) => (
              <EntryLink
                key={diaryEntry.id}
                to={`/diary-entries/${diaryEntry.id}`}
              >
                <DiaryEntryCard compressed diaryEntry={diaryEntry} />
              </EntryLink>
            ))}
          </EntryList>
        )}
        {!loading && !error && diaryEntries.length === 0 && (
          <UploadStatusCard message="No diary entries yet, why not add one?" />
        )}
        {error && (
          <Card>
            <div>Oops! We couldn't load your diary entries at the moment.</div>
            <div>Please try refreshing the page or check back later.</div>
          </Card>
        )}
      </DiaryLayout>
    </>
  );
};

export default DiaryEntries;
