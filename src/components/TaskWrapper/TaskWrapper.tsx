import React, { useState } from "react";

import Task from "../Task/Task";
import TaskEdit from "../TaskEdit/TaskEdit";

import { TaskTypeExt, ActionCreators } from "../../state/task";
import { useDispatch } from "react-redux";

type Props = {
  task: TaskTypeExt;
};

const TaskWrapper: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const handleTaskClick = () => {
    setIsEdit(true);
  };

  const handleLeaveClick = () => {
    setIsEdit(false);
  };

  const handleDeleteClick = () => {
    dispatch(ActionCreators.deleteTask(task.id));
  };

  return !isEdit ? (
    <TaskEdit
      deadline={task.deadline}
      description={task.description}
      title={task.title}
      onLeaveClick={handleLeaveClick}
      onDeleteClick={handleDeleteClick}
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
