import styled from "styled-components";
import { colors } from "../../constants";

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background-color: ${colors.dark};
  color: ${colors.white};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  width: 100%;

  &:hover {
    background-color: ${colors.primary};
  }

  &:active {
    background-color: #004494;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #ccc; /* Disabled state color */
    cursor: not-allowed;
  }
`;

export default SubmitButton;
