import { combineReducers } from "redux";

import HomeReducer from "../features/home/reducers/HomeReducer.js";
import NavigationReducer from "../navigation/reducers/NavigationReducer.js";
import FooterReducer from "../features/footer/reducers/FooterReducer.js";

export default combineReducers({
  HomeReducer,
  NavigationReducer,
  FooterReducer,
});
