import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";

interface DescriptionInputProps {
  description: string;
  setDescription: (description: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-weight: bold;
  color: ${colors.dark};
  font-size: 1.25rem;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid ${colors.dark};
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  outline: none;
`;

const DescriptionInput: React.FC<DescriptionInputProps> = ({
  description,
  setDescription,
}) => (
  <Container>
    <Label htmlFor="description">Description*</Label>
    <Textarea
      id="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
    />
  </Container>
);

export default DescriptionInput;
