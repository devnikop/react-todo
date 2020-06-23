import { createSelector } from "reselect";

import { TaskTypeExt } from "../../state/task/index";
import { RootState } from "../../state/reducers";
import { Group } from "../../state/task/index";

type AllTasks = (state: RootState) => Array<TaskTypeExt>;

const getAllTasks: AllTasks = (state) => state.taskReducer.tasks;

export const getTodoTasks = createSelector(
  (state: RootState) => getAllTasks(state),
  (tasks) => tasks.filter((task) => task.group === Group.TODO)
);

export const getDoingTasks = createSelector(
  (state: RootState) => getAllTasks(state),
  (tasks) => tasks.filter((task) => task.group === Group.DOING)
);

export const getDoneTasks = createSelector(
  (state: RootState) => getAllTasks(state),
  (tasks) => tasks.filter((task) => task.group === Group.DONE)
);
