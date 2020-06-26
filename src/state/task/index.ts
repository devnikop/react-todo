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
  group: Group;
  id: string;
  title: string;
}

export type IState = {
  tasks: Array<TaskEditType>;
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

const addTask: CaseReducer<IState, PayloadAction<TaskEditType>> = (
  state,
  action
) => ({
  ...state,
  tasks: state.tasks.concat(action.payload),
});

const deleteTask: CaseReducer<IState, PayloadAction<string>> = (
  state,
  action
) => ({
  ...state,
  tasks: state.tasks.filter((task) => task.id !== action.payload),
});

const updateTitle: CaseReducer<
  IState,
  PayloadAction<{ id: string; title: string }>
> = (state, action) => {
  const { id, title } = action.payload;
  const taskId = state.tasks.findIndex((task) => task.id === id);
  state.tasks[taskId].title = title;
};

const updateDate: CaseReducer<
  IState,
  PayloadAction<{ id: string; date: string }>
> = (state, action) => {
  const { id, date } = action.payload;
  const taskId = state.tasks.findIndex((task) => task.id === id);
  state.tasks[taskId].deadline = date;
};

const updateDescription: CaseReducer<
  IState,
  PayloadAction<{ id: string; description: string }>
> = (state, action) => {
  const { id, description } = action.payload;
  const taskId = state.tasks.findIndex((task) => task.id === id);
  state.tasks[taskId].description = description;
};

const updateGroup: CaseReducer<
  IState,
  PayloadAction<{ id: string; group: Group }>
> = (state, action) => {
  const { id, group } = action.payload;
  const taskId = state.tasks.findIndex((task) => task.id === id);
  state.tasks[taskId].group = group;
};

export const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask,
    deleteTask,
    updateTitle,
    updateDate,
    updateDescription,
    updateGroup,
  },
});
