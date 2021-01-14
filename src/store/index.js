import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { languagesReducer } from "./reducers/languages";

const reducers = combineReducers({ languages: languagesReducer });

export default createStore(reducers, applyMiddleware(thunk));
