import rootReducer from "./root-reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const middleWrares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleWrares));

const persistor = persistStore(store);
export { store, persistor };
