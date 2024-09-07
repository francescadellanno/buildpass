import React from "react";
import { Link, useParams } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { colors, siteDiary } from "../constants";
import DiaryEntryCard from "../components/DiaryEntryCard";
import DiaryLayout from "../components/DiaryLayout";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

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

const DiaryEntry: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const entry = siteDiary.find((entry) => entry.id === id);

  //TODO: Improve this error handling
  if (!entry) {
    return <div>No entry found</div>;
  }

  return (
    <>
      <Header />
      <DiaryLayout>
        <BackgroundGlobalStyle />
        <div>
          <BackButton text="Reports" path="/diary-entries" />
        </div>
        <DiaryEntryCard entry={entry} />
      </DiaryLayout>
    </>
  );
};

export default DiaryEntry;
