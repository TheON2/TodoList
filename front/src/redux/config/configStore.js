import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import user from "../reducers/userSlice";

const rootReducer = combineReducers({
  user
});

// 2. create store
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// 3. export
export default store;