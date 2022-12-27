import { SET_MOVIES } from "./types";

const initialState = {
    movies: [],
    search: ''
};

export const movies = (state = initialState, action) => {
    console.log("action type", action.type);
    console.log("action payload", action.payload);

    switch (action.type) {
        case SET_MOVIES: {
            return {
                ...state,
                movies: action.payload
            };
        }
        default:
            return state;
    }
}