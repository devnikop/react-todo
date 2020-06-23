import { nanoid } from "nanoid";
import moment from "moment";

export enum Group {
  TODO = `TODO`,
  DOING = `DOING`,
  DONE = `DONE`,
}

export interface TaskType {
  deadline: string;
  description: string;
  title: string;
}

export interface TaskTypeExt extends TaskType {
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
    type: `ADD_TASK`,
    payload: task,
  }),
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case `ADD_TASK`:
      return {
        ...state,
        tasks: state.tasks.concat(action.payload),
      };
    default:
      return state;
  }
};

export { ActionCreators, reducer };
