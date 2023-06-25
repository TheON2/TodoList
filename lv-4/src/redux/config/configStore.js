import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
});

// 2. create store
const store = createStore(rootReducer);

// 3. export
export default store;