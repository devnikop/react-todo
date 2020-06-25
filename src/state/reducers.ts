import { combineReducers } from "redux";

import { tasks } from "./task/index";

const rootReducer = combineReducers({
  taskReducer: tasks.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
