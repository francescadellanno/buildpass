import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";

interface DateInputProps {
  date: string;
  setDate: (date: string) => void;
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

const Input = styled.input`
  color: ${colors.dark};
  padding: 7px 12px;
  border: 1px solid ${colors.dark};
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const DateInput: React.FC<DateInputProps> = ({ date, setDate }) => (
  <Container>
    <Label htmlFor="date">Date</Label>
    <Input
      type="date"
      id="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      required
    />
  </Container>
);

export default DateInput;
