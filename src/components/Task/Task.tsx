import React from "react";
import styled from "styled-components";
import moment from "moment";

import { TaskType } from "../../state/task";
import { Color } from "../../styles/variables";

const getTaskBackgroundColor = (deadline: string): string => {
  if (moment(deadline, `D MMM`).isBefore(moment())) {
    return Color.overdue;
  }
  if (moment(deadline, `D MMM`).isBefore(moment().add(3, `d`))) {
    return Color.warning;
  }

  return Color.deadlineOk;
};

const Task: React.FC<TaskType & { className?: string }> = ({
  className,
  title,
  description,
  deadline,
}) => {
  return (
    <article className={className}>
      <h3>{title}</h3>
      <p>{description}</p>
      <time dateTime={deadline}>{deadline}</time>
    </article>
  );
};

const StyledTask = styled(Task)`
  padding: 10px;

  background-color: ${({ deadline }) => getTaskBackgroundColor(deadline)};
  border-radius: 3px;

  h3 {
    margin: 0;
    margin-bottom: 20px;
  }

  p {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export default StyledTask;
