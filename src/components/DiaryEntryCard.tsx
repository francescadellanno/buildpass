import React from "react";
import styled from "styled-components";
import { SiteDiaryEntry } from "../types";
import DiaryEntryBlock from "./DiaryEntryBlock";
import Card from "./Card";
import ResponsiveImage from "./ResponsiveImage";

const DiaryEntryCardWrapper = styled(Card)`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const Date = styled.div`
  margin: 10px;
`;

const Heading = styled.div`
  font-weight: bold;
  text-align: left;
`;

const DiaryEntryCard: React.FC<{
  diaryEntry: SiteDiaryEntry;
  compressed?: boolean;
}> = ({ diaryEntry, compressed = false }) => {
  const {
    date,
    description,
    imagePath,
    title,
    incidents,
    instructions,
    visitors,
    weather,
    resources,
  } = diaryEntry;

  const visitorCategories =
    visitors?.map(
      (visitor) => `${visitor.type}: ${visitor.organization || visitor.person}`
    ) || [];
  const resourceCategories =
    resources?.map((resource) => `${resource.type}: ${resource.description}`) ||
    [];

  return (
    <DiaryEntryCardWrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
      {!compressed && (
        <Content>
          {description && (
            <DiaryEntryBlock title="Description" value={description} />
          )}
          {weather && (
            <DiaryEntryBlock title="Weather Conditions" value={weather} />
          )}
          {incidents && <DiaryEntryBlock title="Incidents" value={incidents} />}
          {visitorCategories.length > 0 && (
            <DiaryEntryBlock title="Visitors" value={visitorCategories} />
          )}
          {instructions && (
            <DiaryEntryBlock title="Instructions" value={instructions} />
          )}
          {resourceCategories.length > 0 && (
            <DiaryEntryBlock title="Resources" value={resourceCategories} />
          )}
          {imagePath && (
            <>
              <Heading>Site Image</Heading>
              <ResponsiveImage imagePath={imagePath} />
            </>
          )}
        </Content>
      )}
    </DiaryEntryCardWrapper>
  );
};

export default DiaryEntryCard;
