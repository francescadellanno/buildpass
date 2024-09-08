import React from "react";
import styled from "styled-components";
import { SiteDiaryEntry } from "../types";
import DiaryEntryBlock from "./DiaryEntryBlock";
import Card from "./Card";
import ResponsiveImage from "./ResponsiveImage";

// TODO: Go through h1, h2, h3, h4, h5, h6 and make sure they are styled correctly

const DiaryEntryCardWrapper = styled(Card)`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bolD;
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

// Date, description, weather, image
const DiaryEntryCard: React.FC<{
  entry: SiteDiaryEntry;
  compressed?: boolean;
}> = ({ entry, compressed = false }) => {
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
  } = entry;

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
          {visitorCategories && (
            <DiaryEntryBlock title="Visitors" value={visitorCategories} />
          )}
          {instructions && (
            <DiaryEntryBlock title="Instructions" value={instructions} />
          )}
          {resourceCategories && (
            <DiaryEntryBlock title="Resources" value={resourceCategories} />
          )}
          {/* TODO could make image  and image url the same name */}
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
