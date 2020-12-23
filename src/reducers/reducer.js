import { combineReducers } from "redux";

import HomeReducer from "../features/home/reducers/HomeReducer.js";
import NavigationReducer from "../navigation/reducers/NavigationReducer.js";
import FooterReducer from "../features/footer/reducers/FooterReducer.js";
import VideoplayerReducer from "../features/videoplayer/reducers/VideoplayerReducer.js";

export default combineReducers({
  HomeReducer,
  NavigationReducer,
  FooterReducer,
  VideoplayerReducer,
});
