import React from "react";
import styled from "styled-components";

import Task, { TaskType } from "../Task/Task";
import { resetList } from "../../styles/mixins";
import { Group } from "../../index";

export interface TaskTypeExt extends TaskType {
  id: string;
  group: Group;
}

type Props = {
  tasks: Array<TaskTypeExt>;
};

const StyledTasks = styled.ul`
  ${resetList()}
`;

const Tasks: React.FC<Props> = ({ tasks }) => {
  return (
    <StyledTasks>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            title={task.title}
            description={task.description}
            deadline={task.deadline}
          />
        </li>
      ))}
    </StyledTasks>
  );
};

export default Tasks;
