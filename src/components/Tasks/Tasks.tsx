import React from "react";
import styled from "styled-components";

import Task from "../Task/Task";
import { resetList } from "../../styles/mixins";
import { TaskTypeExt } from "../../state/task";

type Props = {
  tasks: Array<TaskTypeExt>;
};

const StyledTasks = styled.ul`
  ${resetList()}

  display: grid;
  gap: 20px;

  margin-bottom: 20px;
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
