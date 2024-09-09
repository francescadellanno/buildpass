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

const Value = styled.div`
  text-align: left;
`;

const DiaryEntryBlock: React.FC<{
  title: string;
  value: string | string[];
}> = ({ title, value }) => {
  return (
    <DiaryEntryBlockWrapper>
      <Heading>{title}</Heading>
      {!Array.isArray(value) && <Value>{value}</Value>}
      {Array.isArray(value) &&
        value.map((value) => <Value key={value}>{value}</Value>)}
    </DiaryEntryBlockWrapper>
  );
};

export default DiaryEntryBlock;
