import { useSelector, shallowEqual } from "react-redux";
import React from "react";

import Tasks from "../Tasks/Tasks";
import NewTask from "../NewTask/NewTask";

import {
  getDoingTasks,
  getDoneTasks,
  getTodoTasks as getDefaultTasks,
  getTodoTasks,
} from "../../state/task/selectors";

type Props = {
  type: string;
};

const TypeMap = new Map([
  [`todo`, getTodoTasks],
  [`doing`, getDoingTasks],
  [`done`, getDoneTasks],
]);

const getTasksSelector = (type: string): typeof getDefaultTasks =>
  TypeMap.get(type) || getDefaultTasks;

const TasksGroup: React.FC<Props> = ({ type }) => {
  const tasks = useSelector(getTasksSelector(type), shallowEqual);

  return (
    <section>
      <h2 className="visually-hidden">{type} group</h2>
      <Tasks tasks={tasks} />
      <NewTask />
    </section>
  );
};

export default TasksGroup;
