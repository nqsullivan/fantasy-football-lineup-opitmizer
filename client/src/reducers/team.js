import {CREATE, DELETE, FETCH_ALL, UPDATE, MAKE_STARTER, MAKE_BENCH} from "../constants/actionTypes";

export default (team = [], action) => {
    switch (action.type) {
        case MAKE_STARTER:
        case MAKE_BENCH:
        case UPDATE:
            return team.map((player) => player._id === action.payload._id ? action.payload: player);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...team,action.payload];
        case DELETE:
            return team.filter((player) => player._id !== action.payload)
        default:
            return team;
    }
};