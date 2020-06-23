import { useSelector } from "react-redux";

import { TaskTypeExt } from "../../state/task/index";
import { RootState } from "../../state/reducers";
import { Group } from "../../state/task/index";

const useAllTasks = () =>
  useSelector(
    (state: RootState): Array<TaskTypeExt> => state.taskReducer.tasks
  );

export const useTodoTasks = () => {
  const tasks = useAllTasks();
  return tasks.filter((task) => task.group === Group.TODO);
};

export const useDoingTasks = () => {
  const tasks = useAllTasks();
  return tasks.filter((task) => task.group === Group.DOING);
};

export const useDoneTasks = () => {
  const tasks = useAllTasks();
  return tasks.filter((task) => task.group === Group.DONE);
};
