import React, { useState } from "react";
import styled from "styled-components";

import { getTaskBackgroundColor } from "../../helpers/helpers";
import { Color } from "../../styles/variables";
import { TaskEditType } from "../../state/task";

import InputDate from "./InputDate";
import InputTitle from "./InputTitle";
import TextareaDescription from "./TextareaDescription";

interface Props extends TaskEditType {
  onDeleteClick: () => void;
  onLeaveClick: () => void;
}

const TaskEdit: React.FC<Props & { className?: string }> = ({
  className,
  deadline,
  description: taskDescription,
  title: taskTitle,
  onDeleteClick,
  onLeaveClick,
}) => {
  const [date, setDate] = useState<string>(deadline);
  const [description, setDescription] = useState<string>(taskDescription);
  const [title, setTitle] = useState<string>(taskTitle);

  const handleTitleChange = (newValue: string): void => {
    setTitle(newValue);
  };

  const handleDateChange = (newValue: string): void => {
    setDate(newValue);
  };

  const handleDescriptionChange = (newValue: string): void => {
    setDescription(newValue);
  };

  return (
    <section className={className}>
      <InputTitle value={title} onValueChange={handleTitleChange} />
      <InputDate value={date} onValueChange={handleDateChange} />
      <TextareaDescription
        value={description}
        onValueChange={handleDescriptionChange}
      />
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
  gap: 10px;
  padding: 10px;

  background-color: ${({ deadline }) => getTaskBackgroundColor(deadline)};
  border-radius: 3px;
  box-shadow: 0 1px 0 ${Color.blueShadow1};
`;

export default StyledTaskEdit;
