import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints, colors } from "../constants";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.dark};
  padding: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const Heading = styled.div`
  color: ${colors.dark};
  font-weight: bold;
  font-size: 3rem;
`;

const HeaderLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const HeaderLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${colors.dark};
  font-size: 1.25rem;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -4px;
    background-color: ${colors.secondary};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Heading>Site Diary</Heading>
      <HeaderLinks>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/diary-entries">Reports</HeaderLink>
        <HeaderLink to="/add-entry">Add report</HeaderLink>
      </HeaderLinks>
    </HeaderWrapper>
  );
};

export default Header;
