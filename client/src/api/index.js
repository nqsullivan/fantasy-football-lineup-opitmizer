import axios from "axios";

const url = 'http://localhost:5000/team';

export const fetchTeam = () => axios.get(url);
export const createPlayer = (newPlayer) => axios.post(url, newPlayer);
export const updatePlayer = (id, updatedPlayer) => axios.patch(`${url}/${id}`, updatedPlayer);