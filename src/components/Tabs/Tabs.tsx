import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { Color } from "../../styles/variables";
import { resetList } from "../../styles/mixins";

const Tabs: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="visually-hidden">Task groups</h2>
      <ul>
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
    </section>
  );
};

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 5px 10px;

  font-size: 20px;
  font-weight: bold;
  color: inherit;
  background-color: ${Color.blue2};

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
    background-color: ${Color.blue1};
    pointer-events: none;
    box-shadow: inset 0 1px 0 ${Color.blueShadow1};

    &:focus {
      background-color: ${Color.blue1};
    }
  }
`;

const StyledTabs = styled(Tabs)`
  ul {
    ${resetList()}

    display: flex;
    flex-wrap: wrap;
    width: fit-content;
  }

  li {
    flex-shrink: 0;
  }
`;

export default StyledTabs;
