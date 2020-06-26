import React from "react";
import styled from "styled-components";

import { resetList } from "../../styles/mixins";
import { TaskEditType } from "../../state/task";

import TaskWrapper from "../TaskWrapper/TaskWrapper";

type Props = {
  tasks: Array<TaskEditType>;
};

const Tasks: React.FC<Props & { className?: string }> = ({
  className,
  tasks,
}) => {
  return (
    <ul className={className}>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskWrapper task={task} />
        </li>
      ))}
    </ul>
  );
};

const StyledTasks = styled(Tasks)`
  ${resetList()}

  display: grid;
  gap: 20px;
  margin-bottom: 20px;
`;

export default StyledTasks;
