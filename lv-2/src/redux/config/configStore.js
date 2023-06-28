import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../reducers/todos";

const rootReducer = combineReducers({
  todos
});
const store = createStore(rootReducer);

export default store;