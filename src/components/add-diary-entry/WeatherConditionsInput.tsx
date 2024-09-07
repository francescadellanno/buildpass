import React from "react";
import styled from "styled-components";

interface WeatherConditionsInputProps {
  weatherConditions: string;
  setWeatherConditions: (value: string) => void;
  weatherOptions: string[];
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

const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const WeatherConditionsInput: React.FC<WeatherConditionsInputProps> = ({
  weatherConditions,
  setWeatherConditions,
  weatherOptions,
}) => (
  <Container>
    <Label htmlFor="weatherConditions">Weather Conditions</Label>
    <Select
      id="weatherConditions"
      value={weatherConditions}
      onChange={(e) => setWeatherConditions(e.target.value)}
    >
      {weatherOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  </Container>
);

export default WeatherConditionsInput;
