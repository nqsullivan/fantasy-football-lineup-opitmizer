import { combineReducers } from "redux";

import team from './team';
import auth from './auth';

export default combineReducers({ team, auth });