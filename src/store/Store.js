import { createStore, applyMiddleware } from "redux";
import UsersReducer from "../reducers/UsersReducer";

let store = createStore(UsersReducer, applyMiddleware());

export default store;
