import { useDispatch } from "react-redux";
import React, { useState } from "react";

import { tasks, TaskEditType } from "../../state/task";

import Task from "../Task/Task";
import TaskEdit from "../TaskEdit/TaskEdit";

type Props = {
  task: TaskEditType;
};

const TaskWrapper: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const handleDeleteClick = (): void => {
    dispatch(tasks.actions.deleteTask(task.id));
  };

  const handleLeaveClick = (): void => {
    setIsEdit(false);
  };

  const handleTaskClick = (): void => {
    setIsEdit(true);
  };

  return isEdit ? (
    <TaskEdit
      task={task}
      onDeleteClick={handleDeleteClick}
      onLeaveClick={handleLeaveClick}
    />
  ) : (
    <Task
      deadline={task.deadline}
      title={task.title}
      onClick={handleTaskClick}
    />
  );
};

export default TaskWrapper;
