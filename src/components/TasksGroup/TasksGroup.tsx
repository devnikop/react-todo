import { shallowEqual, useSelector } from "react-redux";
import React from "react";
import styled from "styled-components";

import { Color } from "../../styles/variables";

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
  [`doing`, getDoingTasks],
  [`done`, getDoneTasks],
  [`todo`, getTodoTasks],
]);

const getTasksSelector = (type: string): typeof getDefaultTasks =>
  TypeMap.get(type) || getDefaultTasks;

const TasksGroup: React.FC<Props & { className?: string }> = ({
  className,
  type,
}) => {
  const tasks = useSelector(getTasksSelector(type), shallowEqual);

  return (
    <section className={className}>
      <h2 className="visually-hidden">{type} group</h2>
      {tasks.length ? <Tasks tasks={tasks} /> : ``}
      <NewTask group={tasks[0].group} />
    </section>
  );
};

const styledTasksGroup = styled(TasksGroup)`
  min-width: 320px;
  max-width: 400px;

  padding: 25px 15px;
  box-sizing: border-box;

  background-color: ${Color.grey1};
  border-radius: 0 0 5px 5px;
`;

export default styledTasksGroup;
