import React from "react";
import styled from "styled-components";
import { colors } from "../constants";
import { SiteDiaryEntry } from "../types";
import DiaryEntryBlock from "./DiaryEntryBlock";

// TODO: Go through h1, h2, h3, h4, h5, h6 and make sure they are styled correctly

const DiaryEntryCardWrapper = styled.div`
  background-color: ${colors.white};
  border: 2px solid ${colors.primary};
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  color: ${colors.dark};
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
        </Content>
      )}
    </DiaryEntryCardWrapper>
  );
};

export default DiaryEntryCard;
