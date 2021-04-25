import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import Thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {};
const middleware = [Thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
