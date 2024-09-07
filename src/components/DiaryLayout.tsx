import React from "react";
import styled from "styled-components";

const DiaryLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const DiaryLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <DiaryLayoutWrapper>{children}</DiaryLayoutWrapper>;
};

export default DiaryLayout;
