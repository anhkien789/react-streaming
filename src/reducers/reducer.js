import { combineReducers } from "redux";

import HomeReducer from "../features/home/reducers/HomeReducer.js";
import NavigationReducer from "../navigation/reducers/NavigationReducer.js";

export default combineReducers({
  HomeReducer,
  NavigationReducer,
});
