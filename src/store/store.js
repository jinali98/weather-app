import rootReducer from "./root-reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleWrares = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWrares));
