import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import React from "react";
import styled from "styled-components";

import { Color } from "../../styles/variables";

import NewTask from "../NewTask/NewTask";
import Tabs from "../Tabs/Tabs";
import Tasks from "../Tasks/Tasks";

import {
  getTodoTasks,
  getDoingTasks,
  getDoneTasks,
} from "../../state/task/selectors";

const App: React.FC<{ className?: string }> = ({ className }) => {
  const todoTasks = useSelector(getTodoTasks, shallowEqual);
  const doingTasks = useSelector(getDoingTasks, shallowEqual);
  const doneTasks = useSelector(getDoneTasks, shallowEqual);

  return (
    <>
      <h1>Task manager</h1>
      <div className={className}>
        <Tabs />
        <Switch>
          <Route path="/todo">
            <section>
              <h2>To Do</h2>
              <Tasks tasks={todoTasks} />
              <NewTask />
            </section>
          </Route>
          <Route path="/doing">
            <section>
              <h2>Doing</h2>
              <Tasks tasks={doingTasks} />
            </section>
          </Route>
          <Route path="/done">
            <section>
              <h2>Done</h2>
              <Tasks tasks={doneTasks} />
            </section>
          </Route>
          <Route path="/">
            <Redirect to="/todo"></Redirect>
          </Route>
        </Switch>
      </div>
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
