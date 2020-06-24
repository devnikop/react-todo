import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { resetList } from "../../styles/mixins";
import { Color } from "../../styles/variables";

const Tabs: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <StyledNavLink to="/todo">To do</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/doing">Doing</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/done">Done</StyledNavLink>
      </li>
    </ul>
  );
};

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 5px 10px;

  font-size: 20px;
  font-weight: bold;
  color: inherit;

  transition: background-color 200ms;

  &:hover,
  &:focus {
    background-color: ${Color.grey1};
    cursor: pointer;
  }

  &:active {
    filter: opacity(70%);
  }

  &.active {
    background-color: ${Color.grey1};
    pointer-events: none;

    &:focus {
      background-color: ${Color.grey1};
    }
  }
`;

const StyledTabs = styled(Tabs)`
  ${resetList()}

  display: grid;
  grid-template-columns: repeat(3, max-content);

  width: fit-content;

  background-color: ${Color.blue1};
`;

export default StyledTabs;
