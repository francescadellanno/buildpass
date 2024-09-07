import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BackButtonWrapper = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 10px;
  background-color: #b36a5e;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: fit-content;

  &:hover {
    background-color: #c97c5d;
    transform: translateX(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-right: 10px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-5px);
  }
`;

const BackArrow = styled.svg`
  width: 20px;
  height: 20px;
  fill: white;
`;

const BackButton: React.FC<{ text: string; path: string }> = ({
  text,
  path,
}) => {
  return (
    <BackButtonWrapper to={path}>
      <BackArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z" />
      </BackArrow>
      {text}
    </BackButtonWrapper>
  );
};

export default BackButton;
