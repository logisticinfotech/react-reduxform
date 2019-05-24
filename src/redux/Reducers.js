/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import exampleFormReducer from '../Container/reducer';


const createReducer = combineReducers({
    form: reduxFormReducer,
    formReducer: exampleFormReducer,
});

export default createReducer;
