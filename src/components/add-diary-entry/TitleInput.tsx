import React from "react";
import styled from "styled-components";

interface TitleInputProps {
  title: string;
  setTitle: (title: string) => void;
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

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TitleInput: React.FC<TitleInputProps> = ({ title, setTitle }) => (
  <Container>
    <Label htmlFor="title">Title</Label>
    <Input
      type="text"
      id="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
    />
  </Container>
);

export default TitleInput;
