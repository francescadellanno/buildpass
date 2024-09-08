import React from "react";
import styled from "styled-components";
import { colors } from "../constants";

const Card = styled.div`
  background-color: ${colors.white};
  border: 2px solid ${colors.primary};
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  color: ${colors.dark};
  padding: 20px;
`;

export default Card;
