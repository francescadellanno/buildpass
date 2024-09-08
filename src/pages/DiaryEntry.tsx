import React from "react";
import styled from "styled-components";
import { BackgroundGlobalStyle } from "../constants";
import DiaryEntryCard from "../components/DiaryEntryCard";
import DiaryLayout from "../components/DiaryLayout";
import Header from "../components/Header";
import Button from "../components/Button";
import Card from "../components/Card";
import useGetDiaryEntryById from "../hooks/useGetDiaryEntryById";
import Spinner from "../components/Spinner";

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;

const DiaryEntry: React.FC = () => {
  const { diaryEntry, loading, error } = useGetDiaryEntryById();

  return (
    <>
      <BackgroundGlobalStyle />
      <Header />
      <DiaryLayout>
        <ButtonWrapper>
          <Button arrow text="Back" path="/diary-entries" />
        </ButtonWrapper>
        {loading && <Spinner text="Loading diary entry..." />}
        {!diaryEntry && (
          <Card>
            Uh oh! It looks like the diary entry you were looking for doesn't
            exist.
          </Card>
        )}
        {diaryEntry && <DiaryEntryCard diaryEntry={diaryEntry} />}
        {error && (
          <Card>
            <div>Oops! We couldn't load your diary entry at the moment.</div>
            <div>Please try refreshing the page or check back later.</div>
          </Card>
        )}
      </DiaryLayout>
    </>
  );
};

export default DiaryEntry;
