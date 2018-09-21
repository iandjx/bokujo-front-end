import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import CowReducer from "./CowReducer";
export default combineReducers({
  auth: AuthReducer,
  cows: CowReducer
});
