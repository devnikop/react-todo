import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { getRandomDeadline } from "../../helpers/helpers";

export enum Group {
  DOING = `DOING`,
  DONE = `DONE`,
  TODO = `TODO`,
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

const initialState: IState = {
  tasks: [
    {
      id: nanoid(),
      deadline: getRandomDeadline(),
      description: `This is todo task description`,
      group: Group.TODO,
      title: `Todo task header`,
    },
    {
      id: nanoid(),
      deadline: getRandomDeadline(),
      description: `This is todo task description`,
      group: Group.TODO,
      title: `Todo task 2 header`,
    },
    {
      id: nanoid(),
      deadline: getRandomDeadline(),
      description: `This is todo task description`,
      group: Group.TODO,
      title: `Todo task 3 header`,
    },
    {
      id: nanoid(),
      deadline: getRandomDeadline(),
      description: `This is todo task description`,
      group: Group.TODO,
      title: `Todo task 4 header`,
    },
    {
      id: nanoid(),
      deadline: getRandomDeadline(),
      description: `This is todo task description`,
      group: Group.DOING,
      title: `Doing task header`,
    },
    {
      id: nanoid(),
      deadline: getRandomDeadline(),
      description: `This is todo task description`,
      group: Group.DOING,
      title: `Doing task2 header`,
    },
    {
      id: nanoid(),
      deadline: getRandomDeadline(),
      description: `This is todo task description`,
      group: Group.DOING,
      title: `Doing task 3 header`,
    },
    {
      id: nanoid(),
      deadline: getRandomDeadline(),
      description: `This is todo task description`,
      group: Group.DONE,
      title: `Done task header`,
    },
    {
      id: nanoid(),
      deadline: getRandomDeadline(),
      description: `This is todo task description`,
      group: Group.DONE,
      title: `Done task 2 header`,
    },
    {
      id: nanoid(),
      deadline: getRandomDeadline(),
      description: `This is todo task description`,
      group: Group.DONE,
      title: `Done task 3 header`,
    },
  ],
};

type State = {
  tasks: TaskTypeExt[];
};

const addTask: CaseReducer<State, PayloadAction<TaskTypeExt>> = (
  state,
  action
) => ({
  ...state,
  tasks: state.tasks.concat(action.payload),
});

const deleteTask: CaseReducer<State, PayloadAction<string>> = (
  state,
  action
) => ({
  ...state,
  tasks: state.tasks.filter((task) => task.id !== action.payload),
});

export const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask,
    deleteTask,
  },
});
