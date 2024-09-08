import { createGlobalStyle } from "styled-components";

export const SUPABASE_TABLE_NAME = "BuildPass Site Diary";
export const SUPABASE_BUCKET_NAME = "buildpass-coding-test-bucket";

// Defined breakpoints for responsive design (not all currently in use, kept for demonstration purposes)
export const breakpoints = {
  desktop: "1200px",
  tablet: "768px",
  mobile: "480px",
};

export const colors = {
  white: "#FFFFFF",
  lightest: "#EEE2DF",
  lighter: "#EED7C5",
  primary: "#C89F9C",
  secondary: "#C97C5D",
  dark: "#B36A5E",
};

export const weatherOptions = [
  "Sunny",
  "Cloudy",
  "Overcast",
  "Rainy",
  "Stormy",
];

export const BackgroundGlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    background-color: ${colors.lightest};
  }

  #root {
    height: 100%;
  }
`;
