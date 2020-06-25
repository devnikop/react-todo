import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import React, { FC, useState } from "react";
import styled from "styled-components";

import { tasks, Group } from "../../state/task";
import { getDefaultInput } from "../../styles/mixins";
import { useInputEditStatus } from "../../helpers/useEditStatus";
import { getRandomDeadline } from "../../helpers/helpers";

const NewTask: FC = () => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [taskTitle, setTaskTitle] = useState(``);
  const inputRef = useInputEditStatus({ isEdit, setIsEdit });

  const addNewTask = (): void => {
    dispatch(
      tasks.actions.addTask({
        id: nanoid(),
        deadline: getRandomDeadline(),
        description: ``,
        group: Group.TODO,
        title: taskTitle,
      })
    );
    setTaskTitle(``);
  };

  const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    taskTitle && addNewTask();
  };

  const handleInputBlur = (): void => {
    setIsEdit(false);

    taskTitle && addNewTask();
  };

  const handleTaskTitleInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTaskTitle(e.target.value);
  };

  const handleButtonClick = (): void => {
    setIsEdit(true);
  };

  return isEdit ? (
    <form onSubmit={handleFormSubmit}>
      <Input
        ref={inputRef}
        value={taskTitle}
        placeholder="Add task title"
        onBlur={handleInputBlur}
        onChange={handleTaskTitleInput}
      />
    </form>
  ) : (
    <button type="button" onClick={handleButtonClick}>
      Add another task
    </button>
  );
};

const Input = styled.input`
  ${getDefaultInput()}
`;

export default NewTask;
