import {combineReducers, createStore} from "@reduxjs/toolkit";
import user from "../../reducers/userSlice";

const rootReducer = combineReducers({
  user
});

// 2. create store
const store = createStore(rootReducer);

// 3. export
export default store;