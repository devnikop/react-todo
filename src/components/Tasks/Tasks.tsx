import React from "react";
import styled from "styled-components";

import TaskWrapper from "../TaskWrapper/TaskWrapper";
import { resetList } from "../../styles/mixins";
import { TaskTypeExt } from "../../state/task";

type Props = {
  tasks: Array<TaskTypeExt>;
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
