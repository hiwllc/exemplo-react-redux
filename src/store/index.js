import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers();

export default createStore(reducers, applyMiddleware(thunk));
