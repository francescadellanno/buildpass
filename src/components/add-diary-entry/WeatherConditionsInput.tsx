import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";

interface WeatherConditionsInputProps {
  weather: string;
  setWeatherConditions: (value: string) => void;
  weatherOptions: string[];
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
  weather,
  setWeatherConditions,
  weatherOptions,
}) => (
  <Container>
    <Label htmlFor="weather">Weather</Label>
    <Select
      id="weather"
      value={weather}
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
