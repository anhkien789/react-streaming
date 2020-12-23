import { SHOW_PAGE } from "../actions/types.js";

const initialState = {
  showPage: "",
};

const NavigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PAGE:
      return {
        ...state,
        showPage: action.payload,
      };

    default:
      return state;
  }
};

export default NavigationReducer;
