import { SHOW_PAGE } from "./types.js";

export const showPage = (page) => {
  return {
    type: SHOW_PAGE,
    payload: page,
  };
};
