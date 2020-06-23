import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import useEditStatus from "../../helpers/useEditStatus";
import { ActionCreators, Group } from "../../state/task";

const NewTask: FC = () => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [taskTitle, setTaskTitle] = useState(``);
  const inputRef = useEditStatus({ isEdit, setIsEdit });

  const handleTaskTitleInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTaskTitle(e.target.value);
  };

  const handleInputBlur = (): void => {
    setIsEdit(false);

    taskTitle &&
      dispatch(
        ActionCreators.addTask({
          id: nanoid(),
          title: taskTitle,
          description: `Task description`,
          deadline: `14:00`,
          group: Group.TODO,
        })
      );
  };

  const handleButtonClick = (): void => {
    setIsEdit(true);
  };

  return isEdit ? (
    <input
      ref={inputRef}
      value={taskTitle}
      onBlur={handleInputBlur}
      onChange={handleTaskTitleInput}
    />
  ) : (
    <button onClick={handleButtonClick}>Add another task</button>
  );
};

export default NewTask;
