import { combineReducers, createStore } from "redux";
import  TodoReducer  from "./reducers/TodoReducer";

const reduxDevtoolEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(combineReducers(TodoReducer),{},reduxDevtoolEnhancer);

export default store;