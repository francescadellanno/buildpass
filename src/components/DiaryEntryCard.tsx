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
  const visitorCategories = entry.visitors.map(
    (visitor) => `${visitor.type}: ${visitor.organization || visitor.person}`
  );
  const resourceCategories = entry.resources.map(
    (resource) => `${resource.type}: ${resource.description}`
  );

  return (
    <DiaryEntryCardWrapper>
      <Title>{entry.title}</Title>
      <Date>{entry.date}</Date>
      {!compressed && (
        <Content>
          <DiaryEntryBlock
            title="Description"
            description={entry.description}
          />
          <DiaryEntryBlock
            title="Weather Conditions"
            description={entry.weatherConditions}
          />
          <DiaryEntryBlock title="Incidents" description={entry.incidents} />
          <DiaryEntryBlock title="Visitors" description={visitorCategories} />
          <DiaryEntryBlock
            title="Instructions"
            description={entry.instructions}
          />
          <DiaryEntryBlock title="Resources" description={resourceCategories} />
          {/* TODO could make image  and image url the same name */}
          <Heading>Site Image</Heading>
          <ResponsiveImage imageUrl={entry.image} />
        </Content>
      )}
    </DiaryEntryCardWrapper>
  );
};

export default DiaryEntryCard;
