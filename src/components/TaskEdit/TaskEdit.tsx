import React from "react";
import styled from "styled-components";

import { getTaskBackgroundColor } from "../../helpers/helpers";
import { Color } from "../../styles/variables";
import { TaskEditType } from "../../state/task";

interface Props extends TaskEditType {
  onLeaveClick: () => void;
  onDeleteClick: () => void;
}

const TaskEdit: React.FC<Props & { className?: string }> = ({
  className,
  title,
  description,
  deadline,
  onLeaveClick,
  onDeleteClick,
}) => {
  return (
    <section className={className}>
      <h3>{title}</h3>
      <time dateTime={deadline}>{deadline}</time>
      {description ? (
        <p>{description}</p>
      ) : (
        <textarea placeholder="Add a more detailed description..."></textarea>
      )}
      <button type="button" onClick={onLeaveClick}>
        Leave Edit mode
      </button>
      <button type="button" onClick={onDeleteClick}>
        Delete task
      </button>
    </section>
  );
};

const StyledTaskEdit = styled(TaskEdit)`
  display: grid;
  gap: 5px;
  padding: 10px;

  background-color: ${({ deadline }) => getTaskBackgroundColor(deadline)};
  border-radius: 3px;
  box-shadow: 0 1px 0 ${Color.blueShadow1};

  h3 {
    margin: 0;
    margin-bottom: 10px;

    overflow-wrap: anywhere;
  }

  time {
    padding: 5px 0;
  }

  textarea {
    resize: vertical;
  }
`;

export default StyledTaskEdit;
