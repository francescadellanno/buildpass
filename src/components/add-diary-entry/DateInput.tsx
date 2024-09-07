import React from "react";
import styled from "styled-components";

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
