import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";

interface TextInputProps {
  labelText: string;
  value: string;
  setValue: (title: string) => void;
  id: string;
  required?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  color: ${colors.dark};
  font-size: 1.25rem;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid ${colors.dark};
  border-radius: 4px;
  font-size: 1rem;
`;

const TextInput: React.FC<TextInputProps> = ({
  id,
  labelText,
  value,
  setValue,
  required,
}) => (
  <Container>
    <Label htmlFor={id}>{labelText}</Label>
    <Input
      type="text"
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required={required}
    />
  </Container>
);

export default TextInput;
