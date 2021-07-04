import { combineReducers } from 'redux';
import bugReducer from './bugs';
import projectReducer from './projects';
import userReducer from './users';

export default combineReducers({
    users: userReducer,
    bugs: bugReducer,
    projects: projectReducer
});