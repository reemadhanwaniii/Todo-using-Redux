import { combineReducers, createStore } from "redux";
import  TodoReducer  from "./reducers/TodoReducer";


/**
 * install redux devtool chrome extension
 * https://github.com/reduxjs/redux-devtools/tree/main/extension#installation go to this url
 * 1.1 basic store copy from there
 */
const reduxDevtoolEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(combineReducers(TodoReducer),{},reduxDevtoolEnhancer);

export default store;