import React from "react";
import styled from "styled-components";

const DiaryEntryBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  font-weight: bold;
  text-align: left;
`;

const Description = styled.div`
  text-align: left;
`;

const DiaryEntryBlock: React.FC<{
  title: string;
  description: string | string[];
}> = ({ title, description }) => {
  return (
    <DiaryEntryBlockWrapper>
      <Heading>{title}</Heading>
      {!Array.isArray(description) && <Description>{description}</Description>}
      {Array.isArray(description) &&
        description.map((description) => (
          <Description>{description}</Description>
        ))}
    </DiaryEntryBlockWrapper>
  );
};

export default DiaryEntryBlock;
