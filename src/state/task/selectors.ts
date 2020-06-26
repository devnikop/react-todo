import { createSelector } from "reselect";

import { Group, TaskEditType } from "../../state/task/index";
import { RootState } from "../../state/reducers";

type AllTasks = (state: RootState) => Array<TaskEditType>;

const getAllTasks: AllTasks = (state) => state.taskReducer.tasks;

export const getDoingTasks = createSelector(
  (state: RootState) => getAllTasks(state),
  (tasks) => tasks.filter((task) => task.group === Group.DOING)
);

export const getDoneTasks = createSelector(
  (state: RootState) => getAllTasks(state),
  (tasks) => tasks.filter((task) => task.group === Group.DONE)
);

export const getTodoTasks = createSelector(
  (state: RootState) => getAllTasks(state),
  (tasks) => tasks.filter((task) => task.group === Group.TODO)
);
