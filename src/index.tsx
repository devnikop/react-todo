import React from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";

import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyles from "./styles/global.css";

export enum Group {
  TODO = `TODO`,
  DOING = `DOING`,
  DONE = `DONE`,
}

const tasks = [
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

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App tasks={tasks} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
