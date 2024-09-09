import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { breakpoints, colors } from "../constants";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.dark};
  padding: 1rem;
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const Heading = styled.h1`
  color: ${colors.dark};
  font-weight: bold;
  font-size: 3rem;
  margin: 0;
`;

const HeaderLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const HeaderLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${colors.dark};
  font-size: 1.25rem;
  width: 100%;
  text-wrap: nowrap;

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
  const location = useLocation();

  const getLinkStyle = (path: string) => ({
    fontWeight: location.pathname === path ? "bold" : "normal",
  });

  return (
    <HeaderWrapper>
      <Heading>Site Diary</Heading>
      <HeaderLinks>
        <HeaderLink to="/" style={getLinkStyle("/")}>
          Home
        </HeaderLink>
        <HeaderLink to="/diary-entries" style={getLinkStyle("/diary-entries")}>
          Diary
        </HeaderLink>
        <HeaderLink
          to="/add-diary-entry"
          style={getLinkStyle("/add-diary-entry")}
        >
          + Add Entry
        </HeaderLink>
      </HeaderLinks>
    </HeaderWrapper>
  );
};

export default Header;
