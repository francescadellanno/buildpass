import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";

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
  font-weight: bold;
  color: ${colors.dark};
  font-size: 1.25rem;
`;

const Select = styled.select`
  color: ${colors.dark};
  padding: 8px 12px;
  border: 1px solid ${colors.dark};
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
  outline: none;

  &:focus {
    border-color: blue;
  }
`;

const WeatherConditionsInput: React.FC<WeatherConditionsInputProps> = ({
  weatherConditions,
  setWeatherConditions,
  weatherOptions,
}) => (
  <Container>
    <Label htmlFor="weatherConditions">Weather</Label>
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
