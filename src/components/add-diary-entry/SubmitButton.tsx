import styled from "styled-components";

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background-color: #007bff; /* Primary color */
  color: #fff; /* Text color */
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #0056b3; /* Darker shade for hover */
  }

  &:active {
    background-color: #004494; /* Even darker shade for active */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #ccc; /* Disabled state color */
    cursor: not-allowed;
  }
`;

export default SubmitButton;
