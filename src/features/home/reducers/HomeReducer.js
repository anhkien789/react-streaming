import { SHOW_PLAYER, RESET_PLAYER } from "../actions/types.js";

const initialState = {
  showPlayer: "",
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PLAYER:
      return {
        ...state,
        showPlayer: action.payload,
      };

    case RESET_PLAYER:
      return {
        ...state,
        showPlayer: "",
      };

    default:
      return state;
  }
};

export default HomeReducer;
