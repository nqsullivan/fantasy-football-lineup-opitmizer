import axios from "axios";

//const url = 'http://localhost:5000/team';
const url = 'https://fantasy-football-100.herokuapp.com/'

export const fetchTeam = () => axios.get(url);
export const createPlayer = (newPlayer) => axios.post(url, newPlayer);
export const updatePlayer = (id, updatedPlayer) => axios.patch(`${url}/${id}`, updatedPlayer);
export const deletePlayer = (id) => axios.delete(`${url}/${id}`);
export const makeStarter = (id) => axios.patch(`${url}/${id}/makeStarter`);
export const makeBench = (id) => axios.patch(`${url}/${id}/makeBench`);