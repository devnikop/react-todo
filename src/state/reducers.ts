import { combineReducers } from "redux";

import { reducer as taskReducer } from "./task/index";

const rootReducer = combineReducers({
  taskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
