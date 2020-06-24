import { nanoid } from "nanoid";
import moment from "moment";
import { ADD_TASK, DELETE_TASK } from "./types";

export enum Group {
  TODO = `TODO`,
  DOING = `DOING`,
  DONE = `DONE`,
}

export interface TaskType {
  deadline: string;
  title: string;
}

export interface TaskEditType {
  deadline: string;
  description: string;
  title: string;
}

export interface TaskTypeExt extends TaskEditType {
  group: Group;
  id: string;
}

export type IState = {
  tasks: Array<TaskTypeExt>;
};

export const getRandomDeadline = (): string =>
  moment()
    .add(Math.round(Math.random() * 7), `d`)
    .subtract(2, `d`)
    .format(`D MMM`);

const initialState: IState = {
  tasks: [
    {
      id: nanoid(),
      title: `Task header`,
      description: `Task description`,
      deadline: getRandomDeadline(),
      group: Group.TODO,
    },
    {
      id: nanoid(),
      title: `Task header`,
      description: `Task description`,
      deadline: getRandomDeadline(),
      group: Group.DOING,
    },
    {
      id: nanoid(),
      title: `Task header`,
      description: `Task description`,
      deadline: getRandomDeadline(),
      group: Group.DONE,
    },
  ],
};

const ActionCreators = {
  addTask: (task: TaskTypeExt) => ({
    type: ADD_TASK,
    payload: task,
  }),
  deleteTask: (id: string) => ({
    type: DELETE_TASK,
    payload: id,
  }),
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat(action.payload),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export { ActionCreators, reducer };
