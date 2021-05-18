import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import likeReducer from "./likeReducer";
import commentReducer from "./commentReducer";
import storyReducer from "./storyReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  like: likeReducer,
  comment: commentReducer,
  story: storyReducer,
});

export default rootReducer;
