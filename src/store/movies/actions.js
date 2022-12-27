import { SET_MOVIES } from "./types";

export const setMovies = payload => ({
    type: SET_MOVIES,
    payload,
});