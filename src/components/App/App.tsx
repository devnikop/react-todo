import React from "react";
import styled from "styled-components";
import { useSelector, shallowEqual } from "react-redux";

import NewTask from "../NewTask/NewTask";
import Tasks from "../Tasks/Tasks";
import { Color } from "../../styles/variables";

import {
  getTodoTasks,
  getDoingTasks,
  getDoneTasks,
} from "../../state/task/selectors";

const TaskGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 300px));
  gap: 5%;
  align-items: start;

  section {
    padding: 15px;

    background-color: ${Color.grey1};
    border-radius: 5px;
  }

  h2 {
    margin: 0;
    margin-bottom: 5px;
  }
`;

const App: React.FC = () => {
  const todoTasks = useSelector(getTodoTasks, shallowEqual);
  const doingTasks = useSelector(getDoingTasks, shallowEqual);
  const doneTasks = useSelector(getDoneTasks, shallowEqual);

  return (
    <>
      <h1>Task manager</h1>
      <TaskGroupWrapper>
        <section>
          <h2>To Do</h2>
          <Tasks tasks={todoTasks} />
          <NewTask />
        </section>
        <section>
          <h2>Doing</h2>
          <Tasks tasks={doingTasks} />
        </section>
        <section>
          <h2>Done</h2>
          <Tasks tasks={doneTasks} />
        </section>
      </TaskGroupWrapper>
    </>
  );
};

export default App;
