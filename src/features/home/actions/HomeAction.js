import { SHOW_PLAYER, RESET_PLAYER } from "./types.js";

export const showPlayer = (player) => {
  return {
    type: SHOW_PLAYER,
    payload: player,
  };
};

export const resetPlayer = () => {
  return {
    type: RESET_PLAYER,
  };
};
