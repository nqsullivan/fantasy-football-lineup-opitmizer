import {CREATE, DELETE, FETCH_ALL, UPDATE} from "../constants/actionTypes";

export default (team = [], action) => {
    switch (action.type) {
        case UPDATE:
            return team.map((player) => player._id === action.payload._id ? action.payload: player);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...team,action.payload];
        case DELETE:
            return team;
        default:
            return team;
    }
};