import * as api from '../api';
import {CREATE, DELETE, FETCH_ALL, MAKE_STARTER, UPDATE} from "../constants/actionTypes";

export const getTeam = () => async (dispatch) => {
    try{
        const { data } = await api.fetchTeam();

        dispatch({ type: FETCH_ALL, payload: data })
    }catch(error){
        console.log(error);
    }
}

export const createPlayer = (player) => async (dispatch) => {
    try{
        const { data }  = await api.createPlayer(player);

        dispatch({ type: CREATE, payload: data })
    }catch (error){
        console.log(error);
    }
}

export const updatePlayer = (id, player) => async (dispatch) => {
    try{

        const { data }  = await api.updatePlayer(id, player);

        dispatch({ type: UPDATE, payload: data })
    }catch (error){
        console.log(error);
    }
}

export const deletePlayer = (_id) => async (dispatch) => {
    try{
        await api.deletePlayer(_id);
        dispatch({type: DELETE, payload: _id});
    }catch (error){
        console.log(error);
    }
}

export const makeStarter = (_id) => async (dispatch) => {
    try{
        await api.makeStarter(_id);

        dispatch({ type: MAKE_STARTER, payload: _id});
    } catch (error) {
        console.log(error);
    }

}