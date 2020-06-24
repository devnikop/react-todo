import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { Color } from "../../styles/variables";

import Tabs from "../Tabs/Tabs";
import TasksGroup from "../TasksGroup/TasksGroup";

const App: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <h1>Task manager</h1>
      <main className={className}>
        <Tabs />
        <Switch>
          <Route path="/todo">
            <TasksGroup type={`todo`} />
          </Route>
          <Route path="/doing">
            <TasksGroup type={`doing`} />
          </Route>
          <Route path="/done">
            <TasksGroup type={`done`} />
          </Route>
          <Route path="/">
            <Redirect to="/todo"></Redirect>
          </Route>
        </Switch>
      </main>
    </>
  );
};

const StyledApp = styled(App)`
  section {
    padding: 15px;

    background-color: ${Color.grey1};
    border-radius: 0 0 5px 5px;
  }

  h2 {
    margin: 0;
    margin-bottom: 5px;
  }
`;

export default StyledApp;
