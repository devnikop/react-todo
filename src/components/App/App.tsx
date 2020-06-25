import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";

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

export default App;
