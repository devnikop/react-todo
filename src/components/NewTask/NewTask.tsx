import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import styled from "styled-components";

import { useInputEditStatus } from "../../helpers/useEditStatus";
import { ActionCreators, Group, getRandomDeadline } from "../../state/task";
import { getDefaultInput } from "../../styles/mixins";

const NewTask: FC = () => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [taskTitle, setTaskTitle] = useState(``);
  const inputRef = useInputEditStatus({ isEdit, setIsEdit });

  const addNewTask = () => {
    dispatch(
      ActionCreators.addTask({
        id: nanoid(),
        title: taskTitle,
        description: ``,
        deadline: getRandomDeadline(),
        group: Group.TODO,
      })
    );
    setTaskTitle(``);
  };

  const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    taskTitle && addNewTask();
  };

  const handleTaskTitleInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTaskTitle(e.target.value);
  };

  const handleInputBlur = (): void => {
    setIsEdit(false);

    taskTitle && addNewTask();
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
