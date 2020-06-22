import React from "react";
import styled from "styled-components";

import { Group } from "../../data/tasks";

import NewTask from "../NewTask/NewTask";
import Tasks, { TaskTypeExt } from "../Tasks/Tasks";
import { Color } from "../../styles/variables";

type Props = {
  tasks: Array<TaskTypeExt>;
};

const TaskGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 300px));
  gap: 5%;

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

const App: React.FC<Props> = ({ tasks }) => {
  const todoTasks = tasks.filter((task) => task.group === Group.TODO);
  const doingTasks = tasks.filter((task) => task.group === Group.DOING);
  const doneTasks = tasks.filter((task) => task.group === Group.DONE);

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
