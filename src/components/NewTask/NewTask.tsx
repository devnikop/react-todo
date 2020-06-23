import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import useEditStatus from "../../helpers/useEditStatus";
import { ActionCreators, Group, getRandomDeadline } from "../../state/task";

const NewTask: FC = () => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [taskTitle, setTaskTitle] = useState(``);
  const inputRef = useEditStatus({ isEdit, setIsEdit });

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
      <input
        ref={inputRef}
        value={taskTitle}
        onBlur={handleInputBlur}
        onChange={handleTaskTitleInput}
      />
    </form>
  ) : (
    <button onClick={handleButtonClick}>Add another task</button>
  );
};

export default NewTask;
