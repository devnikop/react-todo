import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

import { getTaskBackgroundColor } from "../../helpers/helpers";
import { Color } from "../../styles/variables";
import { TaskEditType } from "../../state/task";
import {
  useTextareaEditStatus,
  useInputEditStatus,
} from "../../helpers/useEditStatus";
import {
  resetInput,
  resetTextarea,
  getDefaultInput,
} from "../../styles/mixins";

interface Props extends TaskEditType {
  onLeaveClick: () => void;
  onDeleteClick: () => void;
}

const TaskEdit: React.FC<Props & { className?: string }> = ({
  className,
  title: taskTitle,
  description: taskDescription,
  deadline: taskDate,
  onLeaveClick,
  onDeleteClick,
}) => {
  const [title, setTitle] = useState<string>(taskTitle);
  const [isEditTitle, setIsEditTitle] = useState<boolean>(!title);
  const [date, setDate] = useState<string>(taskDate);
  const [isEditDate, setIsEditDate] = useState<boolean>(!date);
  const [description, setDescription] = useState<string>(taskDescription);
  const [isEditDescription, setIsEditDescription] = useState<boolean>(
    !taskDescription
  );

  const titleRef = useInputEditStatus({
    isEdit: isEditTitle,
    setIsEdit: setIsEditTitle,
  });
  const descriptionRef = useTextareaEditStatus({
    isEdit: isEditDescription,
    setIsEdit: setIsEditDescription,
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = (): void => {
    setIsEditTitle(false);
  };

  const handleTitleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    e.key === `Enter` && setIsEditTitle(false);
  };

  const handleTitleClick = (): void => {
    setIsEditTitle(true);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setDate(moment(e.target.value, `YYYY-MM-DD`).format(`D MMM`));
  };

  const handleDateClick = (): void => {
    setIsEditDate(true);
  };

  const handleDescriptionClick = (): void => {
    setIsEditDescription(true);
  };

  const handleDesriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setDescription(e.target.value);
  };

  const handleDescriptionEnter = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    e.key === `Enter` && setIsEditDescription(false);
  };

  const handleDescriptionBlur = (): void => {
    setIsEditDescription(false);
  };

  return (
    <section className={className}>
      {isEditTitle ? (
        <TitleEdit
          ref={titleRef}
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          onKeyDown={handleTitleEnter}
        />
      ) : (
        <TitlePresentation
          defaultValue={title}
          placeholder="Add task title"
          onClick={handleTitleClick}
        />
      )}
      {isEditDate ? (
        <DateEdit
          value={moment(date, `D MMM`).format(`YYYY-MM-DD`)}
          onChange={handleDateChange}
        />
      ) : (
        <DatePresentation
          defaultValue={moment(date, `D MMM`).format(`YYYY-MM-DD`)}
          onClick={handleDateClick}
        />
      )}
      {isEditDescription ? (
        <DescriptionEdit
          ref={descriptionRef}
          value={description}
          placeholder="Add a more detailed description..."
          onChange={handleDesriptionChange}
          onBlur={handleDescriptionBlur}
          onKeyDown={handleDescriptionEnter}
        />
      ) : (
        <DescriptionPresentation
          defaultValue={description}
          placeholder="Add a more detailed description..."
          onClick={handleDescriptionClick}
        />
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

const TitleEdit = styled.input`
  ${getDefaultInput()}
`;

const TitlePresentation = styled.input`
  ${resetInput()}
  ${getDefaultInput()}
`;

const DateEdit = styled.input.attrs(() => ({
  type: "date",
}))``;

const DatePresentation = styled.input.attrs(() => ({
  type: "date",
}))`
  background: none;
  border: none;
  appearance: none;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

const DescriptionEdit = styled.textarea`
  resize: vertical;
`;

const DescriptionPresentation = styled.textarea`
  ${resetTextarea()}
`;

const StyledTaskEdit = styled(TaskEdit)`
  display: grid;
  gap: 10px;
  padding: 10px;

  background-color: ${({ deadline }) => getTaskBackgroundColor(deadline)};
  border-radius: 3px;
  box-shadow: 0 1px 0 ${Color.blueShadow1};

  time {
    padding: 5px 0;
  }
`;

export default StyledTaskEdit;
