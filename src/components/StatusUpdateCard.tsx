import React from "react";
import { styled } from "styled-components";
import { colors } from "../constants";
import Button from "./Button";
import Card from "./Card";

const StatusUpdateCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const HeadingText = styled.h1`
  color: ${colors.dark};
  margin: 0;
`;

const Message = styled(Card)`
  font-size: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
`;

const StatusUpdateCard: React.FC<{
  heading: string;
  message: string;
  uniqueId?: string;
}> = ({ heading, message, uniqueId }) => {
  return (
    <StatusUpdateCardWrapper>
      <HeadingText>{heading}</HeadingText>
      <Message>{message}</Message>
      <ButtonWrapper>
        {uniqueId && (
          <Button
            text="View Uploaded Report"
            path={`/diary-entry/${uniqueId}`}
          />
        )}
        <Button text="+ Add Another Report" path="/add-diary-entry" />
      </ButtonWrapper>
    </StatusUpdateCardWrapper>
  );
};

export default StatusUpdateCard;
