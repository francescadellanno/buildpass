import React from "react";
import styled from "styled-components";

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
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const DescriptionInput: React.FC<DescriptionInputProps> = ({
  description,
  setDescription,
}) => (
  <Container>
    <Label htmlFor="description">Description</Label>
    <Textarea
      id="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
    />
  </Container>
);

export default DescriptionInput;
