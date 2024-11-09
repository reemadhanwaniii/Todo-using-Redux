import { combineReducers, createStore } from "redux";
import  TodoReducer  from "./reducers/TodoReducer";

const store = createStore(combineReducers(TodoReducer),{});

export default store;