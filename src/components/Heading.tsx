import React from "react";
import styled from "styled-components";
import { colors } from "../constants";

//TODO: Overkill having this component, remove in the end, just want to keep styles consistent for now

const HeadingWrapper = styled.div`
  color: ${colors.dark};
  font-weight: bold;
  font-size: 3rem;
  margin: 20px;
  text-align: center;
`;

const Heading: React.FC<{ text: string }> = ({ text }) => {
  return <HeadingWrapper>{text}</HeadingWrapper>;
};

export default Heading;
