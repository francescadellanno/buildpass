import React from "react";
import styled from "styled-components";

const DiaryLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const DiaryLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <DiaryLayoutWrapper>{children}</DiaryLayoutWrapper>;
};

export default DiaryLayout;
