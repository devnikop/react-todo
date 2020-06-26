import { useDispatch } from "react-redux";
import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";

import { getTaskBackgroundColor } from "../../helpers/helpers";
import { Color } from "../../styles/variables";
import { TaskEditType, tasks, Group } from "../../state/task";

import InputDate from "./InputDate";
import InputTitle from "./InputTitle";
import TextareaDescription from "./TextareaDescription";

interface Props {
  task: TaskEditType;
  onDeleteClick: () => void;
  onLeaveClick: () => void;
}

const TaskEdit: React.FC<Props & { className?: string }> = ({
  className,
  task,
  onDeleteClick,
  onLeaveClick,
}) => {
  const {
    deadline,
    description: taskDescription,
    group,
    id,
    title: taskTitle,
  } = task;
  const dispatch = useDispatch();

  const [date, setDate] = useState<string>(deadline);
  const [isDateEdit, setDateEdit] = useState<boolean>(!date);
  const [description, setDescription] = useState<string>(taskDescription);
  const [isDescriptionEdit, setDescriptionEdit] = useState<boolean>(
    !description
  );
  const [title, setTitle] = useState<string>(taskTitle);
  const [isTitleEdit, setTitleEdit] = useState<boolean>(!title);

  useEffect(() => {
    !isTitleEdit &&
      dispatch(
        tasks.actions.updateTitle({
          id,
          title,
        })
      );
  }, [isTitleEdit]);

  useEffect(() => {
    !isDateEdit &&
      dispatch(
        tasks.actions.updateDate({
          id,
          date,
        })
      );
  }, [isDateEdit]);

  useEffect(() => {
    !isDescriptionEdit &&
      dispatch(
        tasks.actions.updateDescription({
          id,
          description,
        })
      );
  }, [isDescriptionEdit]);

  const handleTitleChange = (newValue: string): void => {
    setTitle(newValue);
  };

  const handleDateChange = (newValue: string): void => {
    setDate(newValue);
  };

  const handleDescriptionChange = (newValue: string): void => {
    setDescription(newValue);
  };

  const handleGroupChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const group = e.target.value as Group;
    dispatch(
      tasks.actions.updateGroup({
        id,
        group,
      })
    );
  };

  return (
    <section className={className}>
      <InputTitle
        value={title}
        isEdit={isTitleEdit}
        setIsEdit={setTitleEdit}
        onValueChange={handleTitleChange}
      />
      <InputDate
        value={date}
        isEdit={isDateEdit}
        setIsEdit={setDateEdit}
        onValueChange={handleDateChange}
      />
      <TextareaDescription
        value={description}
        isEdit={isDescriptionEdit}
        setIsEdit={setDescriptionEdit}
        onValueChange={handleDescriptionChange}
      />
      <label>
        <span>Move to </span>
        <select value={group} onChange={handleGroupChange}>
          <option value={Group.TODO}>To do</option>
          <option value={Group.DONE}>Done</option>
          <option value={Group.DOING}>Doing</option>
        </select>
      </label>
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

  background-color: ${({ task }) => getTaskBackgroundColor(task.deadline)};
  border-radius: 3px;
  box-shadow: 0 1px 0 ${Color.blueShadow1};
`;

export default StyledTaskEdit;
