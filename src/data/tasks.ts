import { nanoid } from "nanoid";

export enum Group {
  TODO = `TODO`,
  DOING = `DOING`,
  DONE = `DONE`,
}

export const tasks = [
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
];
