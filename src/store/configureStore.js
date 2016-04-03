/*global process, require*/
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../reducers";

let middlewares = [thunkMiddleware];

if (process.env.NODE_ENV == "development") {
  const createLogger = require("redux-logger");
  const logger = createLogger();
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
