import React from "react";
import styled from "styled-components";
import { colors } from "../constants";
import { SiteDiaryEntry } from "../types";

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

const DiaryEntryCard: React.FC<SiteDiaryEntry> = (entry) => {
  return (
    <DiaryEntryCardWrapper>
      <h2>{entry.title}</h2>
      <strong>Date:</strong> {entry.date}
      <strong>Work Progress:</strong> {entry.workProgress}
      <strong>Weather Conditions:</strong> {entry.weatherConditions}
      <strong>Resources:</strong> Laborers: {entry.resources.laborers || "N/A"},
      Cranes: {entry.resources.cranes || "N/A"}, Materials:{" "}
      {entry.resources.materials?.length
        ? entry.resources.materials.join(", ")
        : "N/A"}
      , Machinery:{" "}
      {entry.resources.machinery?.length
        ? entry.resources.machinery.join(", ")
        : "N/A"}
      <strong>Incidents:</strong> {entry.incidents}
      <strong>Visitors:</strong>{" "}
      {entry.visitors
        .map(
          (visitor) =>
            `${visitor.type}: ${visitor.organization || visitor.person}`
        )
        .join(", ")}
      <strong>Instructions:</strong> {entry.instructions}
    </DiaryEntryCardWrapper>
  );
};

export default DiaryEntryCard;
