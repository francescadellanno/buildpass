import React from "react";
import { useParams } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../constants";
import DiaryEntryCard from "../components/DiaryEntryCard";
import DiaryLayout from "../components/DiaryLayout";
import Header from "../components/Header";
import Button from "../components/Button";
import useSupabaseData from "../hooks/useSupabaseData";
import Card from "../components/Card";

//TODO: Make sure using all data from data entries / assessment
//TODO: Update weather to be better...

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

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;

const DiaryEntry: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useSupabaseData();
  const entry = data.find((entry) => entry.id === id);

  return (
    <>
      <BackgroundGlobalStyle />
      <Header />
      <DiaryLayout>
        <ButtonWrapper>
          <Button arrow text="Back" path="/diary-entries" />
        </ButtonWrapper>
        {!entry && (
          <Card>
            Uh oh! Looks like the diary entry you were looking for doesn't exist
            anymore.
          </Card>
        )}
        {entry && <DiaryEntryCard entry={entry} />}
      </DiaryLayout>
    </>
  );
};

export default DiaryEntry;
