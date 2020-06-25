import moment from "moment";
import React from "react";
import styled from "styled-components";

import { Color } from "../../styles/variables";
import { getTaskBackgroundColor } from "../../helpers/helpers";
import { TaskType } from "../../state/task";

interface Props extends TaskType {
  onClick: () => void;
}

const Task: React.FC<Props & { className?: string }> = ({
  className,
  deadline,
  title,
  onClick,
}) => {
  return (
    <section className={className} onClick={onClick}>
      <h3>{title}</h3>
      <time dateTime={moment(deadline, `D MMM`).format(`YYYY-M-D`)}>
        {deadline}
      </time>
    </section>
  );
};

const StyledTask = styled(Task)`
  display: grid;
  grid-auto-flow: column;
  gap: 5%;
  justify-content: space-between;
  padding: 10px;

  background-color: ${({ deadline }) => getTaskBackgroundColor(deadline)};
  border-radius: 3px;
  box-shadow: 0 1px 0 ${Color.blueShadow1};

  h3 {
    margin: 0;

    overflow-wrap: anywhere;
  }
`;

export default StyledTask;
