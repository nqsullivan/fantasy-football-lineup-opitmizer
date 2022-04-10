import axios from "axios";

const API = axios.create({ baseUrl: 'https://fantasy-football-100.herokuapp.com' });


API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('profile')).token
    }
    return req;
})

export const fetchTeam = () => API.get('/team');
export const createPlayer = (newPlayer) => API.post('/team', newPlayer);
export const updatePlayer = (id, updatedPlayer) => API.patch(`/team/${id}`, updatedPlayer);
export const deletePlayer = (id) => API.delete(`/team/${id}`);
export const makeStarter = (id) => API.patch(`/team/${id}/makeStarter`);
export const makeBench = (id) => API.patch(`/team/${id}/makeBench`);

export const login = (formData) => API.post('/user/login', formData);
export const signup = (formData) => API.post('/user/signup', formData);
