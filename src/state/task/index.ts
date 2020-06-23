import { nanoid } from "nanoid";

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

const initialState: IState = {
  tasks: [
    {
      id: nanoid(),
      title: `Task header`,
      description: `Task description`,
      deadline: `20:00`,
      group: Group.TODO,
    },
    {
      id: nanoid(),
      title: `Task header`,
      description: `Task description`,
      deadline: `20:00`,
      group: Group.DOING,
    },
    {
      id: nanoid(),
      title: `Task header`,
      description: `Task description`,
      deadline: `20:00`,
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
